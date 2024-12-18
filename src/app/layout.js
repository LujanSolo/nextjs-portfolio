import { Inter } from "next/font/google";
import "./globals.css";
import clsx from 'clsx';
import MatrixBackground from '@/components/MatrixBackground';
import Sound from '@/components/Sound';
// import dynamic from "next/dynamic";

// const MatrixBg = dynamic(()=> import("../components/MatrixBg.jsx"), {ssr: false} );

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "LujanSolo - the portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>
        {children}
        <MatrixBackground />
        <Sound />
        <div id="modal-root" />
      </body>
    </html>
  );
}
