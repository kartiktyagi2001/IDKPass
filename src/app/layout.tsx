import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "IDK Pass",
  description: "A password manager that forgets passwords",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="w-full h-full bg-[#ffe4a6]"
      >
        <Navbar />
        
        <main>
          {children}
        </main>

        <Footer />
      </body>
      
    </html>
  );
}
