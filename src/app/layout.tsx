import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../index.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { COMPANY_INFO, SEO } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${SEO.defaultTitle} - Quality Pipes & Fittings`,
  description: COMPANY_INFO.description,
  appleWebApp: {
    title: COMPANY_INFO.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-neutral-clean text-neutral-charcoal`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
