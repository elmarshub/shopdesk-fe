import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/functional/header";
import Footer from "@/components/functional/footer";

export const metadata: Metadata = {
  title: "ShopDesk",
  description: "The Simplest Way to Manage your Shop!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
