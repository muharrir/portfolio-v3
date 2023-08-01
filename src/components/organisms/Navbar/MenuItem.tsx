"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { menuItem } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

function MenuItem() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");
  const [showMenu, setShowMenu] = useState(false);
  const { activeSection, setActiveSection } = useActiveSectionContext();
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkifClickedOutside = (e: MouseEvent) => {
      if (showMenu && ref.current && !ref.current.contains(e.target as Node))
        setShowMenu(false);
    };
    document.addEventListener("click", checkifClickedOutside);
    return () => {
      document.removeEventListener("click", checkifClickedOutside);
    };
  }, [showMenu]);

  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    setTheme(isDarkMode ? "light" : "dark");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex gap-x-5 lg:gap-x-12 items-center">
      <ul className="hidden lg:flex gap-x-10 text-lg">
        {menuItem.map((v, i) => (
          <li key={i}>
            <Link
              href={v.href}
              className={` ${
                activeSection === v.text
                  ? "text-[#30A2FF] dark:text-[#B9F3FC] font-medium"
                  : "text-black/50 dark:text-white/50 font-light"
              }`}
              onClick={() => setActiveSection(v.text)}
            >
              {v.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Dark Mode Button */}
      <button
        className="w-10 h-10 bg-[#C7E9B0] dark:bg-[#A4BC92] rounded-full border-2 border-black flex items-center justify-center cursor-pointer"
        onClick={toggleDarkMode}
      >
        <Image
          src={isDarkMode ? "/icon/ic-sun.svg" : "/icon/ic-moon.svg"}
          alt="ic-sun"
          width={26}
          height={26}
        />
      </button>

      {/* Hamburger Button */}
      <button
        className="w-10 h-10 bg-[#C7E9B0] dark:bg-[#A4BC92] rounded-full border-2 border-black flex items-center justify-center cursor-pointer lg:hidden"
        onClick={handleClickMenu}
        ref={ref}
      >
        <Image
          src={"/icon/ic-hamburger.svg"}
          alt="ic-hamburger"
          width={26}
          height={26}
        />
      </button>

      {showMenu && (
        <>
          <div className="absolute right-0 top-14 w-32 h-36  px-4 flex items-center border-2 border-black rounded-xl bg-white dark:bg-[#212121]">
            <ul className="flex flex-col lg:hidden  gap-y-2">
              {menuItem.map((v, i) => (
                <li key={i}>
                  <Link
                    href={v.href}
                    className={` ${
                      activeSection === v.text
                        ? "text-blue-500 dark:text-blue-500"
                        : "text-black dark:text-white"
                    }`}
                    onClick={() => setActiveSection(v.text)}
                  >
                    {v.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute -right-1 top-[60px] w-32 h-36 bg-black rounded-xl -z-10"></div>
        </>
      )}
    </div>
  );
}

export default MenuItem;
