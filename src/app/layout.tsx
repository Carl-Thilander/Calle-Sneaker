import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "CustomKicks",
  description: "Design your shoe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Header />
            <main style={{ flexGrow: 1 }}>{children}</main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
