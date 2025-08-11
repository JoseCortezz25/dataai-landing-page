import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/organisms/header';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'DataAI Services',
  description: 'Transformamos datos en decisiones inteligentes'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
