import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: 'AXOM — Precision Darkwear',
  description: 'Avant-garde clothing. Precision cut. Zero compromise.',
  keywords: 'axom, darkwear, luxury fashion, avant-garde',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <CartDrawer />
        <main>{children}</main>
        <footer className="border-t border-axom-border mt-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
              <div>
                <p className="font-display text-2xl font-black tracking-widest2 text-axom-cream mb-4">AXOM</p>
                <p className="text-xs text-axom-muted leading-relaxed">Precision darkwear.<br />Built for those who move in silence.</p>
              </div>
              {[
                { title: 'Shop', links: ['All Products', 'Outerwear', 'Bottoms', 'Footwear'] },
                { title: 'Info', links: ['About', 'Stockists', 'Sustainability', 'Careers'] },
                { title: 'Support', links: ['Shipping', 'Returns', 'Sizing Guide', 'Contact'] },
              ].map((col) => (
                <div key={col.title}>
                  <p className="text-[10px] uppercase tracking-widest text-axom-silver mb-4">{col.title}</p>
                  <ul className="space-y-2.5">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a href="#" className="text-xs text-axom-muted hover:text-axom-cream transition-colors">{l}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-axom-border gap-4">
              <p className="text-[10px] text-axom-muted uppercase tracking-widest">© 2026 AXOM. All rights reserved.</p>
              <p className="text-[10px] text-axom-muted uppercase tracking-widest">Precision. Darkness. Form.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
