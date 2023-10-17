import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Medic AI',
  description: 'Your Paramedic Pocketbook',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          'mx-auto',
          'max-w-5xl',
          fontSans.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
