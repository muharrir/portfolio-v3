"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { motion } from "framer-motion";

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection]);

  const contentAnimation = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 1 },
    },
  };

  return (
    <section
      className="pt-[100px] lg:h-[calc(100vh-100px)] -scroll-mt-28 lg:-scroll-mt-3"
      id="contact"
      ref={ref}
    >
      <motion.div
        className="px-6 lg:px-[200px] py-[50px] flex flex-col items-start lg:items-center lg:justify-center"
        variants={contentAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: false,
        }}
      >
        <h1 className="text-4xl lg:text-5xl font-semibold">Get In Touch</h1>
        <p className="mt-10 lg:w-[50%] lg:text-center text-gray-700 dark:text-white/60">
          I’m currently looking for new opportunities. If you’re interested to
          collaborate with me, have a question or just want to say hi, leave a
          message for me. I’ll try my best to get back to you!
        </p>

        {/* Button */}
        <div className="relative pt-[50px]">
          <Link href={"mailto:muharrir97@gmail.com"}>
            <button className="w-[200px] h-[50px] bg-[#FFCE38] rounded-lg flex justify-center items-center absolute bottom-1 right-1 border-2 border-black hover:right-2 hover:bottom-2 transition-all">
              <h2 className="font-semibold text-black text-lg">Say Hello</h2>
            </button>
          </Link>
          <div className="w-[200px] h-[50px] bg-black rounded-lg -z-10"></div>
        </div>
      </motion.div>

      {/* Social Media */}
      <div className="mt-[100px] border-t-2 border-b-2 border-black ">
        <div className="py-[30px] px-6 lg:px-[200px] flex flex-row justify-center lg:items-center lg:justify-between gap-2 lg:gap-0">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <h3 className="lg:font-medium text-sm lg:text-base hidden lg:block">
              Find me at my social media:
            </h3>
            <div className="lg:ml-5 flex gap-2">
              <Link href={"https://www.instagram.com/mhrrir_/"} target="_blank">
                <div className="bg-black w-11 h-11 lg:w-14 lg:h-14 rounded-full flex items-center justify-center hover:bg-black/50 cursor-pointer">
                  <Image
                    src={"/icon/ic-instagram.svg"}
                    width={24}
                    height={24}
                    alt="ic-instagram"
                  />
                </div>
              </Link>
              <Link href={"https://linkedin.com/in/muharrir"} target="_blank">
                <div className="bg-black w-11 h-11 lg:w-14 lg:h-14 rounded-full flex items-center justify-center hover:bg-black/50 cursor-pointer">
                  <Image
                    src={"/icon/ic-linkedin.svg"}
                    width={24}
                    height={24}
                    alt="ic-linkedin"
                  />
                </div>
              </Link>
              <Link href={"https://github.com/muharrir"} target="_blank">
                <div className="bg-black w-11 h-11 lg:w-14 lg:h-14 rounded-full flex items-center justify-center hover:bg-black/50 cursor-pointer">
                  <Image
                    src={"/icon/ic-github-white.svg"}
                    width={24}
                    height={24}
                    alt="ic-github"
                  />
                </div>
              </Link>
            </div>
          </div>

          <Link href={"https://wa.me/+6282114341838"} target="_blank">
            <div className="flex items-center gap-x-3 lg:gap-x-5">
              <div className="bg-black w-11 h-11 lg:w-14 lg:h-14 rounded-full flex items-center justify-center hover:bg-black/50 cursor-pointer">
                <Image
                  src={"/icon/ic-whatsapp.svg"}
                  width={24}
                  height={24}
                  alt="ic-whatsapp"
                />
              </div>
              <h3 className="lg:font-medium text-sm lg:text-base hidden lg:block">
                +62 821-1434-1838
              </h3>
            </div>
          </Link>

          <Link href={"mailto:muharrir97@gmail.com"}>
            <div className="flex items-center gap-x-3 lg:gap-x-5">
              <div className="bg-black w-11 h-11 lg:w-14 lg:h-14 rounded-full flex items-center justify-center hover:bg-black/50 cursor-pointer">
                <Image
                  src={"/icon/ic-email.svg"}
                  width={24}
                  height={24}
                  alt="ic-email"
                />
              </div>
              <h3 className="lg:font-medium text-sm lg:text-base hidden lg:block">
                muharrir97@gmail.com
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
