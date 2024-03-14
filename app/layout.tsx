import './globals.css';
import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';
import Navbar from './components/navbar';
// import { MotionDiv } from './components/main/motion';
import Footer from './components/footer';

const rubik = Rubik({ subsets: ['latin'] });

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

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
        {/* <MotionDiv
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1,
            ease: 'easeInOut',
            duration: 1,
          }}
          viewport={{ amount: 0.5 }}
        > */}
        <Navbar />

        {children}

        <div className="mt-[5%]">
          <Footer />
        </div>
        {/* </MotionDiv> */}
      </body>
    </html>
  );
}
