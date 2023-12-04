'use client';
import React, { useState } from 'react';
import { navData } from '../constants/index';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
const NavLinks = ({ handleScroll }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <>
      {navData.map(({ _id, title, href }) => (
        <Link
          key={_id}
          href={href}
          className="relative -mx-3 -my-2 rounded-lg py-4 px-2 text-base text-gray-900 transition-colors nav-link"
          onMouseEnter={() => setHoverIndex(_id)}
          onMouseLeave={() => setHoverIndex(null)}
          onClick={handleScroll}
        >
          <AnimatePresence>
            {hoverIndex === _id && (
              <motion.span
                className="absolute inset-0 rounded-lg bg-gray-100"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{title}</span>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
