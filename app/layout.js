import './globals.css';
import { Inter } from 'next/font/google';
import SmoothScrolling from './components/SmoothScrolling';
import Header from './components/sections/Header';
import Footer from './components/Footer'; // Add this line

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ashiya | Residential , Commercial Interiors & Civil Construction , Geze Automation',
  description: 'An architectural firm based in Wellington.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}