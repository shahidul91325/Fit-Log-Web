"use client";

import Image from "next/image";
import logo from "@/public/logo.png"
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800/70 bg-[#0c0d0f]/95 text-white backdrop-blur-md">
      <div className="flex h-[72px] max-w-full items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
          src={logo}
          width={30}
          height={20}
          alt="Fit-Log-Logo"
          >

          </Image>

          <span className="text-[17px] font-bold tracking-wide">
            FITLOG
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-2 md:flex">
          <a
            href="#"
            className="rounded-full bg-lime-950 px-5 py-2 text-sm font-medium text-[#C2F800]"
          >
            Workouts
          </a>

          <a
            href="#"
            className="rounded-full px-5 py-2 text-sm text-zinc-400 transition hover:text-white"
          >
            My Plan
          </a>
        </nav>

        {/* Desktop Right */}
        <div className="hidden items-center gap-7 md:flex">
          <a className="flex items-center gap-2 text-sm text-zinc-300">
            Plan
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C2F800] px-1 text-xs font-bold text-black">
              0
            </span>
          </a>

          <a className="flex items-center gap-2 text-sm text-zinc-400">
            Saved
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-zinc-700 px-1 text-xs">
              0
            </span>
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-zinc-300 md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-zinc-900 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-2">

            <a
              href="#"
              className="rounded-lg bg-lime-950 px-4 py-3 text-sm text-[#C2F800]"
            >
              Workouts
            </a>

            <a
              href="#"
              className="rounded-lg px-4 py-3 text-sm text-zinc-400 hover:bg-zinc-900"
            >
              My Plan
            </a>

            <a
              href="#"
              className="flex justify-between rounded-lg px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-900"
            >
              Plan
              <span className="rounded-full bg-[#C2F800] px-2 text-xs font-bold text-black">
                0
              </span>
            </a>

            <a
              href="#"
              className="flex justify-between rounded-lg px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-900"
            >
              Saved
              <span className="rounded-full border border-zinc-700 px-2 text-xs">
                0
              </span>
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;