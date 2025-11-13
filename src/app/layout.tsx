import type { Metadata } from 'next';
import Providers from './providers';
import AppHeader from './AppHeader';
import Footer from './AppFooter';


export const metadata: Metadata = { title: 'CustomKicks', description: 'Design your shoe' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <Providers>
          <AppHeader />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
