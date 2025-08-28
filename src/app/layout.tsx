import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body
        className="w-full h-full bg-[#f5e0a6]"
      >
        {children}
      </body>
    </html>
  );
}
