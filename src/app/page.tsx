"use client";
import { useEffect, useState } from "react";
import HomePage from "./home/page";

export default function Main() {
  const [showTeaser, setShowTeaser] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTeaser(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return showTeaser ? (
    <div className="h-screen flex items-center justify-center bg-[#03624C] text-white text-3xl font-bold ">
      Welcome to Mann Gaddi
    </div>
  ) : (
    <HomePage />
  );
}
