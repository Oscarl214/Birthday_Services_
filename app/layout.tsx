import './globals.css';
import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';
import Navbar from './components/Navbar';


import Footer from './components/Footer';
const inter = Inter({ subsets: ['latin'] });
const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Party Knight Rentals',
  description: 'Party Rental Site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
