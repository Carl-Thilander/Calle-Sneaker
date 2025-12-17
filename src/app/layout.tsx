import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "CustomKicks",
  description: "Design your shoe",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <Providers session={session}>
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
