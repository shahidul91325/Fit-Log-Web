"use client"
import { FiArrowDownRight } from 'react-icons/fi';

const CtaButton = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          document.getElementById('library')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }}
        className="inline-flex items-center gap-2 rounded-lg bg-[#CCFF00] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-md transition-all duration-200 hover:scale-105 active:scale-95 sm:text-sm"
      >
        BROWSE WORKOUTS
        <FiArrowDownRight className="text-base" />
      </button>
    </div>
  );
};

export default CtaButton;
