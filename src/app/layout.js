import "./globals.css";
import { Inter } from "next/font/google";
import Appbar from "./components/appbar";
import ParticlesBackground from "./components/ParticlesBackground";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kamlendras",
  description: "Creater of universal-org, FossTube | UEats.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Appbar />

        <ParticlesBackground />
      </body>
    </html>
  );
}
