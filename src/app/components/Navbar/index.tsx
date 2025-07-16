"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeClass = (path: string) =>
    pathname === path
      ? "text-[#03624C] border-b-2 border-[#03624C]"
      : "text-green-500 hover:text-[#03624C]";

  return (
    <nav className="flex justify-between items-center mx-4 md:mx-10 py-4 text-sm relative">
      {/* Logo */}
      <Link href="/home" className="text-2xl font-bold text-[#03624C]">
        MannGadi
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 items-around mr-[20em]">
        <Link href="/home" className={activeClass("/")}>Home</Link>
        <Link href="/form" className={activeClass("/form")}>Register</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center relative">
        <HiOutlineMenuAlt3
          size={30}
          className="cursor-pointer text-[#03624C]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 right-0 bg-gray-900 text-white p-4 rounded-lg shadow-lg w-48 z-50 flex flex-col space-y-4"
            >
              <Link href="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/form" onClick={() => setIsMenuOpen(false)}>Register</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
