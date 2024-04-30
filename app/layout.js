import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import MenuContextProvider from "@/context/MenuContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Empower",
  description: "Next.JS and Tailwind Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}
