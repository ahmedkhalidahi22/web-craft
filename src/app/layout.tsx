import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { BuilderSideBar } from "@/components/BuilderSideBar";

export const metadata: Metadata = {
  title: "Web Craft",
  description: "minimalist web page builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-screen`}>
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          {children}
          <BuilderSideBar />
        </div>
      </body>
    </html>
  );
}
