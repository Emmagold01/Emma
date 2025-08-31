import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar.component";
import { Footer } from "./components/Footer.component";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Emmanuel | Frontend Developer Portfolio",
  description:
    "A modern portfolio built with Next.js, Tailwind CSS, and Framer Motion showcasing projects, skills, and creative animations for an engaging user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <main className="relative flex min-h-screen flex-col bg-[#0F172B] text-white">
          {/* Navbar  */}
          <Navbar />

          {/* Page Content */}
          <div className="relative z-10 flex flex-grow flex-col">
            {children}
          </div>

          {/* Footer  */}
          <Footer />
        </main>
      </body>
    </html>
  );
}
