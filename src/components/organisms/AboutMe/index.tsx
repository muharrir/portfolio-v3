"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";

function AboutMe() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  const fadeLeftAnimation = {
    initial: { opacity: 0, scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0, 1.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      },
    },
  };

  const boxAnimation = {
    initial: isDesktop
      ? { opacity: 1, scale: 0.1, x: -280, y: -270 }
      : { opacity: 1, scale: 0.2, x: -110, y: -140 },
    animate: isDesktop
      ? {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          transition: { delay: 1.5, duration: 2 },
        }
      : {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          transition: { delay: 1, duration: 2 },
        },
  };

  const cursorAnimation = {
    initial: isDesktop ? { x: -500, y: -540 } : { x: -180, y: -270 },
    animate: isDesktop
      ? {
          x: 0,
          y: 0,
          transition: { delay: 1.5, duration: 2 },
        }
      : {
          x: 0,
          y: 0,
          transition: { delay: 0.9, duration: 2 },
        },
  };

  return (
    <section
      className="flex flex-col-reverse lg:flex-row lg:h-screen py-[50px] items-center"
      id="about-me"
      ref={ref}
    >
      <motion.div
        className="mt-10 lg:mt-0 w-screen h-[440px] lg:w-1/2 lg:h-screen bg-[#F7E32F] flex items-center justify-center relative"
        variants={fadeLeftAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <motion.div
          className="w-[75%] h-[75%] border-2 border-blue-500 relative flex items-center justify-center"
          variants={boxAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <div className="absolute w-2 h-2 lg:w-4 lg:h-4 bg-white border border-black -top-1 -left-1 lg:-top-2 lg:-left-2"></div>
          <div className="absolute w-2 h-2 lg:w-4 lg:h-4 bg-white border border-black -top-1 -right-1 lg:-top-2 lg:-right-2"></div>
          <div className="absolute w-2 h-2 lg:w-4 lg:h-4 bg-white border border-black -bottom-1 -left-1 lg:-bottom-2 lg:-left-2"></div>
          <div className="absolute w-2 h-2 lg:w-4 lg:h-4 bg-white border border-black -bottom-1 -right-1 lg:-bottom-2 lg:-right-2"></div>
          {/* Profile */}
          <div className="w-52 h-52 lg:w-[400px] lg:h-[400px] relative">
            <div className="w-[200px] h-[200px] lg:w-[390px] lg:h-[390px] rounded-full absolute z-30 border border-black ">
              <Image
                src={"/image/my-profile.png"}
                alt="profile"
                width={390}
                height={390}
                className="w-[200px] h-[200px] lg:w-[390px] lg:h-[390px]"
              />
            </div>
            <div className="w-[200px] h-[200px] lg:w-[390px] lg:h-[390px] rounded-full bg-black absolute bottom-0 right-0 z-20"></div>
          </div>

          {/* Flutter */}
          <div className="w-[60px] h-[60px] lg:w-[95px] lg:h-[95px] absolute z-40 top-10 right-12 lg:top-16 lg:right-28">
            <div className="w-14 h-14 lg:w-[90px] lg:h-[90px] bg-[#4D9EA3] rounded-2xl z-10 absolute flex items-center justify-center border-2 border-black">
              <Image
                src={"/image/img-flutter.png"}
                alt="img-flutter"
                width={57}
                height={71}
                className="w-[30px] h-[37px] lg:w-[57px] lg:h-[71px]"
              />
            </div>
            <div className="w-14 h-14 lg:w-[90px] lg:h-[90px] bg-black rounded-2xl absolute bottom-0 right-0"></div>
          </div>

          {/* React */}
          <div className="w-[59px] h-[59px] lg:w-[93px] lg:h-[93px] absolute z-40 top-14 left-9  lg:top-28 lg:left-24 -rotate-45">
            <div className="w-14 h-14 lg:w-[90px] lg:h-[90px] bg-[#404141] rounded-2xl z-10 absolute flex items-center justify-center border-2 border-black ">
              <Image
                src={"/image/img-react.png"}
                alt="img-flutter"
                width={74}
                height={77}
                className="rotate-45 w-[42px] h-11 lg:w-[74px] lg:h-[74px]"
              />
            </div>
            <div className="w-14 h-14 lg:w-[90px] lg:h-[90px] bg-black rounded-2xl absolute bottom-0 right-0"></div>
          </div>

          {/* Nextjs */}
          <div className="w-[59px] h-[59px] lg:w-[93px] lg:h-[93px] absolute z-40 bottom-24 left-5 lg:bottom-44 lg:left-16">
            <div className="w-14 h-14 lg:w-[90px] lg:h-[90px] bg-[#1B1919] rounded-full z-10 absolute flex items-center justify-center border-2 border-black">
              <Image
                src={"/image/img-nextjs.png"}
                alt="img-flutter"
                width={49}
                height={57}
                className="absolute bottom-0 left-4 lg:bottom-1 lg:left-6 w-[30px] h-[35px] lg:w-[49px] lg:h-[57px]"
              />
            </div>
            <div className="w-14 h-14 lg:w-[90px] lg:h-[90px] bg-black rounded-full absolute bottom-0 right-0"></div>
          </div>

          {/* Tailwind */}
          <div className="w-[60px] h-[60px] lg:w-[95px] lg:h-[95px] absolute bottom-4 left-20 lg:bottom-4 lg:left-48 ">
            <div className="w-14 h-14 lg:w-[90px] lg:h-[90px] bg-[#6BB6B5] rounded-2xl z-10 absolute flex items-center justify-center border-2 border-black">
              <Image
                src={"/image/tailwind.png"}
                alt="img-tailwind"
                width={69}
                height={41}
                className="w-[43px] h-[26px] lg:w-[69px] lg:h-[41px]"
              />
            </div>
            <div className="w-14 h-14 lg:w-[90px] lg:h-[90px] bg-black rounded-2xl absolute bottom-0 right-0"></div>
          </div>

          {/* Figma */}
          <div className="w-[67px] h-[67px] lg:w-[105px] lg:h-[105px] absolute bottom-9 right-6 lg:bottom-20 lg:right-14 ">
            <div className="w-16 h-16 lg:w-[100px] lg:h-[100px] bg-[#6BB6B5] rounded-2xl z-10 absolute flex items-center justify-center border-2 border-black">
              <Image
                src={"/image/img-figma.png"}
                alt="img-figma"
                width={47}
                height={70}
                className="w-[31px] h-[47px] lg:w-[47px] lg:h-[70px]"
              />
            </div>
            <div className="w-16 h-16 lg:w-[100px] lg:h-[100px] bg-black rounded-2xl absolute bottom-0 right-0"></div>
          </div>
        </motion.div>

        {/* Cursor */}
        <motion.div
          className="absolute bottom-2 right-5 lg:bottom-5 lg:right-10 z-40"
          variants={cursorAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <Image
            src={"/icon/ic-cursor.svg"}
            alt="ic-cursor"
            width={20}
            height={24}
          />
          <div className="mt-1 lg:mt-3 ml-5 w-20 h-5 lg:w-[100px] lg:h-8 bg-black rounded-full border border-black"></div>
          <div className="absolute w-20 h-5 lg:w-[100px] lg:h-8 bg-[#F03434] rounded-full border border-black bottom-[3px] right-[2px] flex items-center justify-center font-semibold text-black text-sm lg:text-base">
            Muharrir
          </div>
        </motion.div>
      </motion.div>

      {/* Right Content */}
      <div className="px-6 lg:w-1/2 lg:px-20">
        <div className="relative">
          <div className=" bg-[#63E85A] w-36 h-12 rounded-full border border-black flex items-center justify-center">
            <h3 className="font-medium text-xl text-black">About Me</h3>
          </div>
          <div className="bg-black w-36 h-12 rounded-full border border-black absolute top-1 left-1 -z-10"></div>
        </div>
        <div className="mt-10 space-y-5 leading-loose text-justify">
          <p className="indent-10">
            I am a graduate of electrical engineering at STT-PLN Jakarta. In the
            beginning, I studied IT during the Covid pandemic in 2020. At that
            time When I had free time I tried to buy a course that learned about
            making the web in coding, and also saw tutorials available on
            YouTube. After completing a course in Dicoding, I was interested in
            learning more about IT. I started participating in several boot
            camps, namely from KOMINFO (Digitalent), Buildwith Angga, and Udemy.
            Some of the courses I attended included, Web-Developer, Mobile
            Developer, Quality Assurance, and Cloud Computing.
          </p>
          <p>
            In 2023 I&apos;m focusing on deepening my web developer knowledge by
            participating in a boot camps at harisenin.com. Starting from
            learning to style using the tailwindcss framework, reactjs, nextjs,
            expressjs, and also studying the database structure with MySQL. The
            reason I took part in the boot camps was to manage my consistency in
            studying so that I could follow the directions and deadlines
            specified. I communicate with my group team using Slac.
          </p>
          <p>
            I have the ability to work in a team, able to work under pressure,
            like to learn new things and adaptive.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
