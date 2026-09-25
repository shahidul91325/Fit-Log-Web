import Image from 'next/image';
import logo from '@/public/logo.png';

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-800/70 bg-[#0c0d0f]/95 text-white backdrop-blur-md ">
      <div className="flex h-[90px] max-w-full items-center justify-between px-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:ml-10 ml-5">
          <Image src={logo} width={20} height={15} alt="Fit-Log-Logo" className="rotate-137"></Image>
          <span className="lg:text-[17px] text-[8px] font-bold tracking-wide">
            FITLOG
          </span>
        </div>
        <div>
            <span className='lg:text-lg text-[8px] text-[#6B7280] '>© 2026 FitLog — Workout Library. Train hard, log honest.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
