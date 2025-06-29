import { Sen } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//Theme Provider
import { ThemeProvider } from "@/components/ThemeProvider";

const Josef = Sen({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose the weights you need
  display: "swap", // Optional: for CSS variable usage
});

export const metadata = {
  title: "VP Group",
  description: "Transforming Spaces, Elevating Lifestyles."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Josef.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
