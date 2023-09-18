import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '@/public/assets/icons/logo.jpg';
function Footer() {
  return (
    <>
      <hr className="h-2 bg-orange-400" />
      <footer className="relative bg-[#EFEFED] text-gray-900 font-roboto">
        <div className=" px-4 sm:px-6 lg:px-16 py-6  max-w-container mx-auto">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-12">
            <div className="relative w-[300px] h-[100px] col-start-1 md:col-span-4">
              <Image
                src={LogoImg}
                alt="logo"
                fill
                className="rounded-sm object-cover"
              />
            </div>

            <div className="col-start-1 md:col-start-5 col-span-4">
              <h5 className="uppercase tracking-wider font-semibold text-gray-700">
                Weitere Informationen
              </h5>
              <ul className="mt-4 flex flex-col gap-3 text-gray-900">
                <li className="mt-2">
                  <Link href="/policy" className="opacity-75 hover:opacity-100">
                    Datenschutz
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="/tmc" className="opacity-75 hover:opacity-100">
                    AGB
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/imprint"
                    className="opacity-75 hover:opacity-100"
                  >
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-start-1 md:col-start-11 col-span-2">
              <h5 className="uppercase tracking-wider font-semibold text-gray-700">
                Visit
              </h5>
              <ul className="mt-4 flex flex-col gap-3 ">
                <li className="mt-2">
                  <Link href="/" className="opacity-75 hover:opacity-100">
                    Home
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="/jobs" className="opacity-75 hover:opacity-100">
                    Jobs
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="/blogs" className="opacity-75 hover:opacity-100">
                    Blog
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/contact"
                    className="opacity-75 hover:opacity-100"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* address section */}
        <div className="bg-gray-900 text-white px-4 sm:px-6 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between max-w-container mx-auto">
            <div className=" w-full lg:flex-1 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
              <h5 className="uppercase tracking-wider font-semibold text-gray-400">
                Contact Details
              </h5>
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <ul className="mt-4 flex flex-col md:flex-row gap-6 justify-around flex-1">
                  <li>
                    <Link
                      href="/contact"
                      className="flex items-center opacity-75 hover:opacity-100"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current"
                        >
                          <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                        </svg>
                      </span>
                      <span className="ml-3">
                        LD Personalvermittlungs GmbH <br /> Nickel Strasse 21,
                        <br />
                        33378 Rheda Wiederbruck
                      </span>
                    </Link>
                  </li>

                  <li className="mt-4">
                    <Link
                      href="/contact"
                      className="flex items-center opacity-75 hover:opacity-100"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current"
                        >
                          <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                          <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" />
                        </svg>
                      </span>
                      <span className="ml-3">
                        Mon - Fri: 9:00 - 19:00
                        <br />
                        Closed on Weekends
                      </span>
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="mt-4">
                    <Link
                      href="/contact"
                      className="flex items-center opacity-75 hover:opacity-100"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current"
                        >
                          <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                        </svg>
                      </span>
                      <span className="ml-3">+49 179 7257337</span>
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      href="/contact"
                      className="flex items-center opacity-75 hover:opacity-100"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current"
                        >
                          <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                        </svg>
                      </span>
                      <span className="ml-3">+49 15510 204189</span>
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      href="/contact"
                      className="flex items-center opacity-75 hover:opacity-100"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current"
                        >
                          <path d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z" />
                        </svg>
                      </span>
                      <span className="ml-3">
                        kontat@ld-personalvermittlung.de
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
              <h5 className="uppercase tracking-wider font-semibold text-gray-400">
                Social Contact
              </h5>
              <ul className="mt-4 flex">
                <li>
                  <a href="#" target="_blank" title="facebook">
                    <FaFacebook className="text-2xl" />
                  </a>
                </li>

                <li className="ml-6">
                  <a href="#" target="_blank" title="twitter">
                    <FaTwitter className="text-2xl" />
                  </a>
                </li>

                <li className="ml-6">
                  <a href="#" target="_blank" title="">
                    <FaInstagram className="text-2xl" />
                  </a>
                </li>

                <li className="ml-6">
                  <a href="#" target="_blank" title="youtube">
                    <FaYoutube className="text-2xl" />
                  </a>
                </li>
              </ul>

              <p className="text-sm text-gray-400 mt-12">
                &copy; {new Date().getFullYear()} LD Recruitment.
                <br className="hidden lg:block" />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
