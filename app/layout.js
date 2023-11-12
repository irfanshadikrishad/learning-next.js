import { Inter } from "next/font/google";
import "./globals.css"; // Global CSS
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "learning-next.js",
  description: "irfanshadikrishad/learning-next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
