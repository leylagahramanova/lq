import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import DynamicBackground from "@/components/DynamicBackground";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: "Leyla Gahramanova - Web Developer & Graphic Designer",
  description: "Portfolio website of Leyla Gahramanova - Web Developer and Graphic Designer specializing in modern web applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <DynamicBackground />
        {children}
      </body>
    </html>
  );
}
