import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const eb_garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={eb_garamond.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
