import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Dragon News",
  description: "Created by Rumana K.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Container className="min-h-screen">{children}</Container>
        <Footer/>
        </body>
    </html>
  );
}
