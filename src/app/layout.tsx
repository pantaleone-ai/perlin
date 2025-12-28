import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Perlin Noise Art Generator',
  description: 'Generate beautiful art using Perlin noise',
  // Add the AdSense meta tag here
  other: {
    'google-adsense-account': 'ca-pub-1629117378320332',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
