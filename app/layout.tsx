import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor/Cursor";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Lumen - Photography",
  description: "Your One Photography Place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Cursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
