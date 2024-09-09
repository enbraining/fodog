import type { Metadata } from 'next';
import LocalFont from 'next/font/local';
import Header from './components/Header';
import './globals.css';

const inter = LocalFont({ src: '../public/fonts/PretendardVariable.woff2' });

export const metadata: Metadata = {
  title: 'Fodo Develop',
  description: 'Enbraining',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' grid'}>
        <div className="mt-8 lg:w-2/3 w-10/12 mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
