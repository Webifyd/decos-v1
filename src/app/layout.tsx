import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../index.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Decos PVC Solutions - Quality Pipes & Fittings',
  description: 'Leading manufacturer of high-quality PVC pipes and fittings for industrial and commercial applications.',
  appleWebApp: {
    title: 'Decos',
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
