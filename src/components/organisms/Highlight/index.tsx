"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { motion } from "framer-motion";

function Highlight() {
  const { ref, inView } = useInView({
    threshold: 0.8,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection]);

  const contentAnimation = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  const imageAnimation = {
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

  return (
    <section
      className="flex px-6 lg:px-48 py-20 items-center h-[calc(100vh-98px)] lg:h-[calc(100vh-104px)] scroll-mt-24"
      id="home"
      ref={ref}
    >
      <motion.div
        className="lg:w-1/2"
        variants={contentAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: false,
        }}
      >
        <div className="lg:w-[90%]">
          <h4 className="font-light text-gray-400">Hi, my name is</h4>
          <h1 className="mt-4 text-6xl font-semibold">Muharrir</h1>
          <h2 className="text-xl mt-5 leading-relaxed">
            I am a{" "}
            <span className="underline underline-offset-4">
              Full-stack Web Developer
            </span>{" "}
            and also a{" "}
            <span className="underline underline-offset-4">
              Mobile Developer
            </span>{" "}
            , enjoy building sites & apps. My Focus is React (Next.js) and
            Flutter.
          </h2>
          <div className="mt-[50px]">
            <div className="h-14 w-[206px] relative">
              <Link href={"#contact"}>
                <button className=" w-[200px] h-[50px] bg-[#FFCE38] border-2 border-black rounded-lg flex justify-center items-center absolute right-[3px] top-[2px] hover:right-[5px] hover:-top-[2px] transition-all">
                  <h2 className="font-semibold text-black text-lg">
                    Contact Me
                  </h2>
                </button>
              </Link>
              <div className="w-[200px] h-[50px] bg-black rounded-lg absolute bottom-0 right-0 -z-10"></div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:w-1/2 lg:flex justify-end"
        variants={imageAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: false,
        }}
      >
        <Image
          src={"/image/illustration.png"}
          alt="illustration"
          width={376}
          height={466}
        />
      </motion.div>
    </section>
  );
}

export default Highlight;
