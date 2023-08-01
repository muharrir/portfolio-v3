import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="flex items-center gap-x-2 lg:gap-x-5 select-none">
      <div className="relative w-11 h-11 lg:w-[64px] lg:h-[64px] cursor-pointer">
        <div className="w-10 h-10 lg:w-[60px] lg:h-[60px] border-2 border-black flex items-center justify-center rounded-xl lg:rounded-2xl bg-white transition-all dark:bg-[#212121] hover:absolute hover:bottom-0 hover:right-0">
          <Image
            src={"/icon/ic-logo.svg"}
            alt="logo"
            width={32}
            height={32}
            className="w-5 h-5 lg:w-8 lg:h-8"
          />
        </div>
        <div className="absolute w-10 h-10 lg:w-[60px] lg:h-[60px] bg-black rounded-xl lg:rounded-2xl bottom-0 right-0 -z-10"></div>
      </div>
      <h2 className="text-sm lg:text-2xl font-semibold tracking-wider ">
        MUHARRIR.
      </h2>
    </div>
  );
}

export default Logo;
