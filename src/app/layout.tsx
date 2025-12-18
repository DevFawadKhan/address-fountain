import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Address Fountain",
    default: "Address Fountain | Exclusive Luxury Real Estate",
  },
  description:
    "Discover premium listings with verified agents and trusted sellers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* 1. "main-wrapper": Applies the 1920px max-width & centering from global.css 
          2. "flex flex-col": Stacks Nav, Main, Footer vertically
          3. "min-h-screen": Ensures the footer stays at the bottom even on empty pages
        */}
        <div className="main-wrapper flex flex-col min-h-screen">
          <Navbar />
          
          {/* "flex-1": Allows this section to grow and fill empty space */}
          <main className="flex-1">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}