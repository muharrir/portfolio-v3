"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`${
        visible
          ? "-top-1 transition-transform duration-300 ease-in"
          : "translate-y-[-100%] transition-transform duration-300 ease-out"
      } px-6 py-4 lg:px-48 lg:py-5 flex items-center justify-between sticky z-50 bg-white/95 dark:bg-[#212121]`}
    >
      <Logo />
      <MenuItem />
    </nav>
  );
}

export default Navbar;
