import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./components/auth/authProvider";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <AuthProvider>
      <body className={inter.className}>
        <Navbar/>
       
        <div>{children}</div>
       
        
        <Footer/>
       </body>
     </AuthProvider>
    </html>
  );
}
