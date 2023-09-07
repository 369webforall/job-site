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
        fill
        sizes="100vw"
        className="rounded-sm object-cover"
      />
    </div>
  );
};

export default Logo;
