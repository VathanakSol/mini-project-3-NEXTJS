import type { Metadata } from "next";
import "./globals.css";
import { Karla } from "next/font/google"

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login",
  description: "Login E-Drink Website",
};

export default function RootLayout({
    children,
}: Readonly<{children: React.ReactNode; }>){
    return (
        <html lang="en">
          <body className={`${karla.className}`}>
            
            <main>
              {children}
            </main>
            
          </body>
        </html>
      );
}





