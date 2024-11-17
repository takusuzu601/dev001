import Image from "next/image";
import localFont from "next/font/local";
import Footer from './../components/Footer'
import Links from "../components/Links";

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
    <div
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1 className="text-5xl">Index Page</h1>
        </div>
      </main>
      <Links/>
      <Footer />
    </div>
  );
}
