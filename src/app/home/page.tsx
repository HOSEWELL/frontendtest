"use client";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div id="home" className="flex flex-col min-h-screen">
      <NavBar />
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 flex-1">
        <div className="space-y-7 max-w-md">
          <h1 className="text-4xl font-bold text-[#03624C]">Welcome to The Mann Gaddi</h1>
          <p>
            We are in the process of providing a holistic approach to social responsibility
            keeping health, sensitization, safety and eco-friendly solutions.
          </p>
          <Link href="/form">
            <button className="bg-[#03624C] text-white px-6 py-2 rounded hover:bg-[#024535]">
              Register
            </button>
          </Link>
        </div>
        <Image
           src="https://i.pinimg.com/736x/96/07/d4/9607d4b663436d225e2d3acc20abe39d.jpg"
           alt="forensic"
           width={1000}
           height={680}
           className="mt-5 md:mt-0 w-[40em]"
          />

      </section>
      <Footer />
    </div>
  );
}
