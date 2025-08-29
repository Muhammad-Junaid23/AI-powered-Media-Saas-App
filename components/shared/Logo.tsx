import React from 'react';
import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo = ({ width = 180, height = 28, className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src='/assets/icons/stars.svg'
        alt='stars'
        width={20}
        height={20}
        className='flex-shrink-0 transition-all duration-300 hover:scale-110'
      />
      <span className='text-lg font-bold text-cyan-400 sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 hover:text-cyan-300'>
        IMAGINERA
      </span>
    </div>
  );
};

export default Logo;
