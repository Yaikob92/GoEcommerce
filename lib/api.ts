import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';

export const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false,
});

// Attach JWT token to every request
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('axom_access_token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto-refresh on 401
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      const refreshToken = localStorage.getItem('axom_refresh_token');
      if (refreshToken) {
        try {
          const res = await axios.post(`${API_BASE}/auth/refresh`, {
            refresh_token: refreshToken,
          });
          localStorage.setItem('axom_access_token', res.data.access_token);
          localStorage.setItem('axom_refresh_token', res.data.refresh_token);
          error.config.headers.Authorization = `Bearer ${res.data.access_token}`;
          return api.request(error.config);
        } catch {
          localStorage.removeItem('axom_access_token');
          localStorage.removeItem('axom_refresh_token');
          window.location.href = '/auth/login';
        }
      }
    }
    return Promise.reject(error);
  }
);

export const authApi = {
  register: (data: { name: string; email: string; password: string }) =>
    api.post('/auth/register', data),
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),
  logout: (refresh_token: string) =>
    api.post('/auth/logout', { refresh_token }),
  refresh: (refresh_token: string) =>
    api.post('/auth/refresh', { refresh_token }),
};

// Simulated product catalog (replace with real API once products endpoint exists)
export const MOCK_PRODUCTS = [
  { id: '1', name: 'Void Harness Jacket', price: 480, category: 'Outerwear', image: '/images/p1.jpg', sizes: ['XS', 'S', 'M', 'L', 'XL'], tag: 'NEW' },
  { id: '2', name: 'Obsidian Cargo Pant', price: 320, category: 'Bottoms', image: '/images/p2.jpg', sizes: ['28', '30', '32', '34', '36'], tag: 'BESTSELLER' },
  { id: '3', name: 'Ashen Draped Tee', price: 140, category: 'Tops', image: '/images/p3.jpg', sizes: ['XS', 'S', 'M', 'L'], tag: null },
  { id: '4', name: 'Eclipse Leather Boot', price: 620, category: 'Footwear', image: '/images/p4.jpg', sizes: ['40', '41', '42', '43', '44', '45'], tag: 'LIMITED' },
  { id: '5', name: 'Charcoal Knit Sweater', price: 260, category: 'Tops', image: '/images/p5.jpg', sizes: ['S', 'M', 'L', 'XL'], tag: null },
  { id: '6', name: 'Phantom Wide Trouser', price: 295, category: 'Bottoms', image: '/images/p6.jpg', sizes: ['XS', 'S', 'M', 'L', 'XL'], tag: 'NEW' },
];
