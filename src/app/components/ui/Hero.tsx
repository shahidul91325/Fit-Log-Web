import Image from 'next/image';
import banner from '@/public/banner.png';
import CtaButton from '../CTAButton/CtaButton';

const Hero = () => {
  return (
    <section className="my-5 flex w-full items-center justify-center bg-[#0a0c10] p-4 md:p-8">
      <div className="flex w-full flex-col-reverse items-center justify-between  gap-8 rounded-2xl border border-gray-800 bg-[#12141a] p-6 shadow-2xl md:p-12 lg:flex-row lg:gap-12 lg:p-16">
        {/* Left Text Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Tagline */}
          <span className="text-xs font-semibold uppercase tracking-widest text-[#CCFF00] sm:text-sm">
            WORKOUT LIBRARY
          </span>

          {/* Main Heading */}
          <h1 className="text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl md:text-5xl lg:mt-3 lg:text-5xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          {/* Subtitle / Description */}
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg lg:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the
            week&apos;s work add up.
          </p>

          {/* CTA Button */}
          <CtaButton></CtaButton>
        </div>

        {/* Right 3D Model Image */}
        <div className="relative flex w-full max-w-md flex-1 items-center justify-end lg:max-w-none">
          <div className="relative h-64 lg:w-[50%] w-full sm:h-80 md:h-96 lg:h-[400px]">
            <Image src={banner} alt="Gym Equipment 3D Illustration" fill className="object-contain" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
