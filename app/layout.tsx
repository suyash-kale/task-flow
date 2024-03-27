import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import '../styles/globals.css';
import Provider from './provider';

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Task Flow',
  description: 'Your own Task Management System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
