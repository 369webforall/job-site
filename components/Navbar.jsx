'use client'
import { useRef, useState } from 'react';
import React, { useEffect } from 'react'; // Add useEffect import
import Logo from './Logo';
import NavLinks from './NavLinks';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
  const ref = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Add state for mobile detection

  useEffect(() => { // Add useEffect hook to detect screen size on mount
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set breakpoint according to your design
    };
    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize); // Add event listener
    return () => window.removeEventListener('resize', handleResize); // Clean up
  }, []);

  const handleScroll = (e) => {
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });

    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('active');
    });

    e.currentTarget.classList.add('active');
  };

  function handleClick(e) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }

  return (
    <header className="px-4 w-full shadow-navbarShadow h-18 lg:h-20 sticky top-0 z-50 bg-[#EFEFED] flex justify-between items-center">
      <div className="w-full px-5 md:px-6 lg:px-20 h-full mx-auto py-1 flex items-center justify-between">
        <Logo />
        {!isMobile && ( // Render desktop navbar when not on mobile
          <div className="hidden md:inline-flex items-center flex-1 justify-end">
            <nav className="grid grid-cols-5 gap-10">
              <NavLinks handleScroll={handleScroll} />
            </nav>
          </div>
        )}
        {/* small icon */}
        {isMobile && ( // Render hamburger menu on mobile
          <div
            onClick={() => setShowMenu(true)}
            className="w-6 h-5 flex flex-col justify-between items-center md:hidden text-4xl text-gray-900 cursor-pointer overflow-hidden group"
          >
            <span className="w-full h-[2px] bg-black inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-black inline-flex transform group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-black inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
          </div>
        )}
        {showMenu && isMobile && ( // Render mobile menu when showMenu is true and on mobile
          <div
            ref={(node) => (ref.current = node)}
            className="absolute md:hidden top-0 right-0 w-full h-screen bg-[#EFEFED] bg-opacity-50 flex flex-col items-end"
          >
            <motion.div className="w-[80%] h-full overflow-y-scroll bg-[#EFEFED] flex flex-col items-center px-4 py-10 relative">
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-black cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />

              <div>
                <ul className="flex flex-col text-base gap-7 mb-4">
                  <Link
                    href="/"
                    className="flex items-center gap-1 font-medium text-gray-700 hover:text-gray-900 cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1 }}
                    >
                      Home
                    </motion.li>
                  </Link>

                  <Link
                    href="/jobs"
                    className="flex items-center gap-1 font-medium text-gray-700 hover:text-gray-900 cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.1 }}
                    >
                      Jobs
                    </motion.li>
                  </Link>

                  <Link
                    href="/blogs"
                    className="flex items-center gap-1 font-medium text-gray-700 hover:text-gray-900 cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.2 }}
                    >
                      Blogs
                    </motion.li>
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center gap-1 font-medium text-gray-700 hover:text-gray-900 cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.3 }}
                    >
                      Contact
                    </motion.li>
                  </Link>
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      <hr className="bg-yellow-500 h-2 z-50" />
    </header>
  );
};

export default Navbar;
