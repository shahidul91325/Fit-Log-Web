'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';

import logo from '@/public/logo.png';
import { excerciseContext } from '../../context-provider/contextProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(excerciseContext);

  if (!context) {
    throw new Error('ExerciseContext must be used inside ExerciseProvider');
  }
  const { todaysPlan, savePlan } = context;

  const pathname = usePathname();

  const isWorkoutActive = pathname === '/';
  const isMyPlanActive = pathname === '/my-plan';

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-800/70 bg-[#0c0d0f]/95 text-white backdrop-blur-md">
      <div className="flex h-[72px] items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={30} height={20} alt="Fit-Log-Logo" />

          <span className="text-[17px] font-bold tracking-wide">FITLOG</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-2 md:flex">
          {/* Workouts */}
          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              isWorkoutActive ? 'bg-lime-950 text-[#CCFF00]' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Workouts
          </Link>

          {/* My Plan */}
          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              isMyPlanActive ? 'bg-lime-950 text-[#CCFF00]' : 'text-zinc-400 hover:text-white'
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Desktop Right */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Plan */}
          <Link href="/my-plan" className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition`}>
            Plan
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#CCFF00] px-1 text-xs font-bold text-black">
              {todaysPlan.length}
            </span>
          </Link>

          {/* Saved */}
          <Link href="/my-plan" className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition`}>
            Saved
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-zinc-700 px-1 text-xs">
              {savePlan.length}
            </span>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-zinc-300 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-zinc-900 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {/* Workouts */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm transition ${
                isWorkoutActive ? 'bg-lime-950 text-[#CCFF00]' : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
              }`}
            >
              Workouts
            </Link>

            {/* My Plan */}
            <Link
              href="/my-plan"
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm transition ${
                isMyPlanActive ? 'bg-lime-950 text-[#CCFF00]' : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
              }`}
            >
              My Plan
            </Link>

            {/* Plan */}
            <Link
              href="/my-plan"
              onClick={() => setIsOpen(false)}
              className={`flex justify-between rounded-lg px-4 py-4 text-sm transition`}
            >
              <span>Plan</span>

              <span className="rounded-full bg-[#CCFF00] px-2 text-xs font-bold text-black">{todaysPlan.length}</span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              onClick={() => setIsOpen(false)}
              className={`flex justify-between rounded-lg px-4 py-4 text-sm transition`}
            >
              <span>Saved</span>

              <span className="rounded-full border border-zinc-700 px-2 text-xs">
                {savePlan.length}</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
