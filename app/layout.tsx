import './globals.css';
import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';
import Navbar from './components/navbar';
// import { MotionDiv } from './components/main/motion';
import Footer from './components/Footer';

// const rubik = Rubik({ subsets: ['latin'] });

// const variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };
import Template from './template';
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
      <body>
        <Navbar />
        <Template>
          {' '}
          <div className="main-content" style={{ paddingTop: '5rem' }}>
            {children}
          </div>
        </Template>
        <div className="mt-[5%]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
