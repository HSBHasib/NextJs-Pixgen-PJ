import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/HomePage/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pixgen",
  description: "This is the best Image Website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col w-5/6 mx-auto">
        <Navbar />
        <main className="">{children}</main>
        </body>
    </html>
  );
}
