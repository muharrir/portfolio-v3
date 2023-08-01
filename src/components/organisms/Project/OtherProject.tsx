"use client";
import OtherProjectItem from "@/components/molecules/OtherProjectItem";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import dataProject from "@/data/dataProject.json";

function OtherProject() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  const firstThreeProjects = dataProject.slice(0, 3);
  const remainingProjects = dataProject.slice(3);

  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 75 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.6 * index },
    }),
  };
  const fadeInAnimationShowMore = {
    initial: { opacity: 0, y: 75 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.6 * index },
    }),
  };

  return (
    <div className="my-[100px]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl text-center font-semibold">
          Other Noteworthy Projects
        </h2>
        <Link
          href={"https://github.com/muharrir?tab=repositories"}
          target="_blank"
          className="w-fit"
        >
          <p className="mt-2 text-center text-blue-500 font-medium underline">
            view the archive
          </p>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10">
        {firstThreeProjects.map((v, i) => (
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
            key={i}
          >
            <OtherProjectItem
              category={v.category}
              title={v.title}
              description={v.description}
              tech={v.tech}
              github={v.github}
              href={v.href}
            />
          </motion.div>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 lg:grid-cols-3 gap-10 my-10 ${
          showMore ? "block" : "hidden"
        }`}
      >
        {remainingProjects.map((v, i) => (
          <motion.div
            variants={fadeInAnimationShowMore}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
            key={i}
          >
            <OtherProjectItem
              category={v.category}
              title={v.title}
              description={v.description}
              tech={v.tech}
              github={v.github}
              href={v.href}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center ">
        <div className="w-fit relative">
          <button
            className=" w-[200px] h-[50px] bg-[#FFCE38] border-2 border-black rounded-lg flex justify-center items-center "
            onClick={handleShowMoreClick}
          >
            <h2 className="font-semibold text-black text-lg">
              {showMore ? "Show Less" : "Show More"}
            </h2>
          </button>
          <div className="w-[200px] h-[50px] bg-black rounded-lg absolute top-1 left-1 -z-10"></div>
        </div>
      </div>
    </div>
  );
}

export default OtherProject;
