import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Styles from "./styles";
import ConditionalLayout from "@/components/ConditionalLayout";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "FashionStore - Fashion E-Commerce",
  description: "Your one-stop fashion destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Styles />
        <AuthProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </AuthProvider>

        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/vendor/aos/aos.js" strategy="afterInteractive" />
        <Script src="/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/vendor/isotope-layout/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/vendor/glightbox/js/glightbox.min.js" strategy="afterInteractive" />
        <Script src="/vendor/drift-zoom/Drift.min.js" strategy="afterInteractive" />
        <Script src="/vendor/purecounter/purecounter_vanilla.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
