import "./globals.css";
import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import Header from "./components/Header/Header";

const atkinson = Atkinson_Hyperlegible({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Personal Dairy",
  description: "Cheeeeeese!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={atkinson.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
