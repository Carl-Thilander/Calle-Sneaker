import type { Metadata } from 'next';
import Providers from './providers';
import Footer from './components/Footer';
import Header from './components/Header';


export const metadata: Metadata = { title: 'CustomKicks', description: 'Design your shoe' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
