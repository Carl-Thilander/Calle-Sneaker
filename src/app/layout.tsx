import type { Metadata } from 'next';
import Providers from './providers';
import Footer from './components/Footer';
import Header from './components/Header';
import { Box } from '@mui/material';


export const metadata: Metadata = { title: 'CustomKicks', description: 'Design your shoe' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <Providers>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>

              {children}
            </Box>

            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
