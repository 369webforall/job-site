import React from 'react';
import Link from 'next/link';
const Address = () => {
  return (
    <>
      <h2 className="text-3xl font-sans mb-5 text-orange-600">
        Kontaktdetails
      </h2>
      <div className=" flex flex-col self-start">
        <div className="max-w-sm bg-orange-100 bg-gradient-to-r from-orange-400 md:from-yellow-500">
          <ul className="mt-4">
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
                <span className="ml-3">kontat@ld-personalvermittlung.de</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Address;
