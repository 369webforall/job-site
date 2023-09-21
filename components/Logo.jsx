import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import LogoImg from '@/public/assets/icons/logo.jpg';

const Logo = () => {
  return (
    <div className=" relative w-[300px] h-[80px]">
      <Image
        src={LogoImg}
        alt="logo"
        sizes="100vw"
        quality={100}
        className="rounded-sm object-cover absolute h-full w-full inset-0"
      />
    </div>
  );
};

export default Logo;
