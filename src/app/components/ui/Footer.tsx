import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.png';

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-800/70 bg-[#0c0d0f]/95 text-white backdrop-blur-md ">
      <div className="flex h-[90px] max-w-full items-center justify-between px-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 ml-10">
          <Image src={logo} width={30} height={20} alt="Fit-Log-Logo" className="rotate-137"></Image>
          <span className="text-[17px] font-bold tracking-wide">
            FITLOG
          </span>
        </div>
        <div>
            <span className='text-sm text-[#6B7280] '>© 2026 FitLog — Workout Library. Train hard, log honest.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
