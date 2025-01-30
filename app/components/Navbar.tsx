"use client"
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <nav className="fixed bg-background-100 w-screen z-10 drop-shadow-md border-b border-pink-200/75">
        <div className="flex flex-wrap items-center justify-between w-full px-6 py-4 mx-auto md:px-32">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/logos/CodeHers v2-1 color on transparent.png"
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto h-8"
              alt="Code(H)ers logo"
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg text-secondary-700 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 text-secondary-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`justify-center w-full md:block md:w-auto ${navbarOpen && "hidden"}`} id="navbar-default">
            <ul className="flex flex-col mt-4 text-lg font-medium rounded-lg md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
                {/* <a
                  href="/about"
                  className="block px-3 py-2 duration-150 ease-in rounded text-text-700 md:hover:text-text-400 md:p-0"
                  >
                  About
                  </a> */}
              </li>
              <li>
                <Link
                  href="/about"
                  className="block px-3 py-2 duration-150 ease-in rounded text-text-700 md:hover:text-text-400 md:p-0"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="block px-3 py-2 duration-150 ease-in rounded text-text-700 md:hover:text-text-400 md:p-0"
                >
                  2025
                </Link>
              </li>
              <li>
                <Link
                  href="/archive"
                  className="block px-3 py-2 duration-150 ease-in rounded text-text-700 md:hover:text-text-400 md:p-0"
                >
                  Event Archive
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="block px-3 py-2 duration-150 ease-in rounded text-text-700 md:hover:text-text-400 md:p-0"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block px-3 py-2 duration-150 ease-in rounded text-text-700 md:hover:text-text-400 md:p-0"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeecJLOzCaWIQ5ox6ofmv31NsMSm2gsM6k30e6_eY92oIJrbA/viewform"
                  className="block px-3 py-2 duration-150 ease-in rounded text-accent-400 md:hover:text-accent-300 md:p-0"
                  target="_blank"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    <div className="h-[72px] w-10"/>
    </div>
  );
}
