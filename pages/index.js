import Image from "next/image";
import localFont from "next/font/local";
import Footer from './../components/Footer'
import Links from "../components/Links";
import Headline from "@/components/Headline";
import Main from "@/components/Main";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <Header/>
<Main page="index" />
      
      <Footer />
    </div>
  );
}
