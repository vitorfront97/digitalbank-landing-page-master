"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../components/Button";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  /* useEffect(() => {
    document.body.style.overflowY = openMenu ? "hidden" : "auto";
    document.documentElement.style.overflowY = openMenu ? "hidden" : "auto";
  }, [openMenu]); */

  // utils/lockScroll.ts
  const lockScroll = () => {
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    document.body.dataset.scrollY = scrollY.toString();
  };

  const unlockScroll = () => {
    const scrollY = document.body.dataset.scrollY;

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";

    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY));
    }
  };

  useEffect(() => {
  if (openMenu) {
    lockScroll();
  } else {
    unlockScroll();
  }

  return unlockScroll;
}, [openMenu]);






  return (
    <header>
      <nav className="md:hidden">
        <div className="px-6 py-6 flex items-center justify-between relative bg-this-gray-50 z-20">
          <a href="/">
            <Image
              className="w-auto"
              src="logo-dark.svg"
              width={0}
              height={0}
              alt="Logo"
            />
          </a>
          <Image
            onClick={() => setOpenMenu((o) => !o)}
            className="w-auto cursor-pointer"
            src={`${openMenu ? "icon-close.svg" : "icon-hamburger.svg"}`}
            width={0}
            height={0}
            alt={`${openMenu ? "Fechar menu" : "Abrir menu"}`}
          />
        </div>
        <ul
          className={`p-8 flex flex-col items-center gap-4 fixed top-24 left-6 right-6 bg-this-gray-50 text-this-blue-950 rounded-sm z-20 transform transition-transform duration-300 ${
            openMenu ? "translate-y-0" : "-translate-y-100"
          }`}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Careers</a>
          </li>
        </ul>
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-10 transform transition-transform duration-300 ${
            openMenu ? "translate-y-0" : "-translate-y-full"
          }`}
        ></div>
      </nav>
      <nav className="hidden px-8 pt-6 pb-6 items-center justify-between relative bg-this-gray-50 z-20 md:px-24 md:flex xl:px-36">
        <a href="index.html">
          <Image
            className="w-auto"
            src="logo-dark.svg"
            width={0}
            height={0}
            alt="Logo"
          />
        </a>
        <ul className="flex gap-8">
          <li>
            <a
              className="pb-10 text-this-gray-600 bg-linear-to-r from-this-green-500 to-this-cyan-400 bg-size-[0%_4px] bg-no-repeat bg-bottom-left hover:bg-size-[100%_4px] hover:text-this-blue-950"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="pb-10 text-this-gray-600 bg-linear-to-r from-this-green-500 to-this-cyan-400 bg-size-[0%_4px] bg-no-repeat bg-bottom-left hover:bg-size-[100%_4px] hover:text-this-blue-950"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="pb-10 text-this-gray-600 bg-linear-to-r from-this-green-500 to-this-cyan-400 bg-size-[0%_4px] bg-no-repeat bg-bottom-left hover:bg-size-[100%_4px] hover:text-this-blue-950"
              href="#"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="pb-10 text-this-gray-600 bg-linear-to-r from-this-green-500 to-this-cyan-400 bg-size-[0%_4px] bg-no-repeat bg-bottom-left hover:bg-size-[100%_4px] hover:text-this-blue-950"
              href="#"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="pb-10 text-this-gray-600 bg-linear-to-r from-this-green-500 to-this-cyan-400 bg-size-[0%_4px] bg-no-repeat bg-bottom-left hover:bg-size-[100%_4px] hover:text-this-blue-950"
              href="#"
            >
              Careers
            </a>
          </li>
        </ul>
        <Button hidden={true} />
      </nav>
    </header>
  );
}
