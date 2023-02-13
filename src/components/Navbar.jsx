import React from "react";
import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks, btnLinks, domain } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <section class="fixed z-10 w-screen bg-background shadow-lg">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="mr-2 flex-1 font-mono text-xl font-semibold italic text-green md:flex md:items-center md:gap-12">
            <a className="" href="/">
              {domain}
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <div aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`text-lg font-semibold text-foreground underline-offset-8 transition hover:text-pink hover:underline`}
                  >
                    <a href={`${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <span className="relative inline-flex">
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-pink"></span>
                  </span>
                  {btnLinks
                    .filter((obj) => obj.id === "novita")
                    .map((obj) => (
                      <a
                        key={obj.id}
                        className="rounded-lg bg-green px-5 py-2.5 text-lg font-semibold text-background shadow shadow-black transition hover:bg-opacity-70 hover:text-black"
                        href={`${obj.path}`}
                      >
                        {obj.title}
                      </a>
                    ))}
                </span>
              </div>

              <div className="z-10 flex flex-1 items-center justify-end md:hidden">
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className="w-10 cursor-context-menu object-contain"
                  onClick={() => setToggle(!toggle)}
                />

                <div
                  className={`${
                    !toggle
                      ? "hidden"
                      : "flex animate__slideInRight animate__animated"
                  } absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-gradient-to-tr from-green to-green/70 p-6 shadow-sm shadow-black`}
                >
                  <ul className="transitio flex flex-1 list-none flex-col items-start justify-end">
                    {navLinks.map((nav, index) => (
                      <li
                        key={nav.id}
                        className={`m-2 cursor-pointer font-semibold text-background underline-offset-8 transition hover:translate-x-1 hover:underline`}
                        onClick={() => setActive(nav.title)}
                      >
                        <a href={`${nav.id}`}>{nav.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
