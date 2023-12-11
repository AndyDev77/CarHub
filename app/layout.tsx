import "./globals.css";

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Car Hub",
  description: "Découvrez la meilleure application de vitrine automobile au monde",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
