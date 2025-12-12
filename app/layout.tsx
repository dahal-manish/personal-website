import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Personal website with About and Writing sections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header>
          <nav className="w-2/3 mx-auto px-4 py-4">
            <div className="flex space-x-8">
              <Link 
                href="/about" 
                className="text-black hover:opacity-70 transition-opacity"
              >
                About
              </Link>
              <Link 
                href="/writing" 
                className="text-black hover:opacity-70 transition-opacity"
              >
                Writing
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow w-2/3 mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

