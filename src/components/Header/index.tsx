import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [isOpen]);

  return (
    <header className="lg:max-w-[1200px] lg:mx-auto p-3 flex justify-between items-center border-b border-b-gray-400">
      <div className="hidden lg:block">
        <Image
          width={80}
          height={80}
          alt="LogoNew"
          src="/img/logo-without-slogan.png"
        />
      </div>
      <div className="lg:hidden relative z-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-black focus:outline-none"
        >
          <svg
            className="h-6 w-6 fill-current z-20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                className="z-10"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 8H6V6h12v2zm-2 5H6v-2h10v2zm2 5H6v-2h12v2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 7h16v2H4v-2zm0 7h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isOpen
            ? "flex absolute top-0 h-full right-0 left-0 bottom-0 flex-col justify-between p-20 items-center bg-white"
            : "hidden"
        } lg:flex lg:gap-5 mt-2 lg:mt-0 transition-all ease-in-out duration-300`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#latest">News</a>
        </li>
      </ul>
      <button className="h-[50px] w-[120px] bg-[#3886fb] rounded-3xl text-white">
        {`Let's Talk`}
      </button>
    </header>
  );
};

export default Header;
