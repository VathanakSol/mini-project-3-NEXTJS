import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBarComponent from "@/components/NavBarComponent";
import FooterComponent from "@/components/FooterComponent";
import { Karla } from "next/font/google"


const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce website",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.className}`}>
        <header >
          <NavBarComponent />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </body>
    </html>
  );
}
