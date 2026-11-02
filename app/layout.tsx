import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar.component";
import { Footer } from "./components/Footer.component";
import { DynamicBackground } from "./components/DynamicBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Emmanuel | Frontend Developer Portfolio",
  description:
    "I'm Emmanuel, a creative front-end developer who enjoys building smooth, interactive digital experiences. I focus on turning ideas into responsive layouts that not only function — but flow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-[#070b16]`}>
        <main className="relative flex min-h-screen flex-col text-white">
          {/* Dynamic dark translucent background with page-specific gradient colors */}
          <DynamicBackground />

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
