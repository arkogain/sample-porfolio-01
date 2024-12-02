import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[url('/bg2.png')] bg-cover bg-fixed bg-no-repeat">
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <Navbar />

          <main className="container mx-auto max-w-screen-lg px-6">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
