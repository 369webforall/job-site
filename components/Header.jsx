'use client';
import React, { useState, useEffect } from 'react';
import Container from './Container';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { Popover } from '@headlessui/react';
import { TbMenu2 } from 'react-icons/tb';
import { IoIosArrowUp } from 'react-icons/io';
import { navData } from '@/constants';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const MobileNavLink = ({ children, ...props }) => {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      // Clean up the scroll event listener when the component unmounts
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return (
    <header
      className={`w-full sticky top-0 z-50 bg-[#EFEFED]  ${
        isScrolled && 'shadow-xl shadow-gray-100]'
      }`}
    >
      <nav>
        <Container className="relative z-50 flex justify-between py-2 font-textFont">
          {/* logo */}
          <div className="relative z-10">
            <Logo />
          </div>
          <div className="hidden lg:flex lg:gap-20 items-center flex-1 justify-end">
            <NavLinks />
          </div>

          <div className="flex items-center gap-6">
            {/* <Button href="/login" className="hidden lg:block">
              Admin
            </Button> */}
            {/* Mobile NavLinks */}
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <IoIosArrowUp className="text-2xl" />
                      ) : (
                        <TbMenu2 className="text-2xl" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            {navData.map(({ _id, title, href }) => (
                              <MobileNavLink href={href} key={_id}>
                                {title}
                              </MobileNavLink>
                            ))}
                            {/* <div className="mt-8 flex flex-col gap-4">
                              <Button href="/login">Admin</Button>
                            </div> */}
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
