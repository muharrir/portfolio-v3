import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ProjectItemProps {
  title: string;
  tech: string[];
  description: string;
  href: string;
  github: string;
  img: string;
  alt: string;
  bgColor: string;
  btnColor: string;
}

function ProjectItem(props: ProjectItemProps) {
  const {
    title,
    tech,
    description,
    href,
    github,
    img,
    alt,
    bgColor,
    btnColor,
  } = props;

  return (
    <div className="relative lg:h-[410px]">
      <div
        className="flex w-full h-fit px-10 py-10 lg:px-[100px] lg:py-[50px] lg:h-[410px] rounded-2xl border-2 border-black items-center flex-col-reverse lg:flex-row"
        style={{ backgroundColor: bgColor }}
      >
        <div className="text-black lg:w-[70%] mt-10 lg:mt-0">
          <h3 className="text-2xl lg:text-3xl font-semibold">{title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((techStack) => (
              <div
                className="py-1 px-4 bg-[#1B1919] w-fit rounded-full text-white text-xs lg:text-sm"
                key={techStack}
              >
                <h4>{techStack}</h4>
              </div>
            ))}
          </div>
          <p className="lg:w-[90%] mt-10 line-clamp-3">{description}</p>

          {/* button */}
          <div className="flex flex-col lg:flex-row gap-6 items-center mt-[50px]">
            <Link href={href} target="_blank" className="relative z-10">
              <div className="w-[200px] h-[50px] bg-black rounded-2xl absolute -z-10 -bottom-1 -right-1"></div>
              <button
                className=" w-[200px] h-[50px] flex items-center justify-center  rounded-2xl border-2 border-black font-semibold"
                style={{ backgroundColor: btnColor }}
              >
                Visit the Page
              </button>
            </Link>
            <Link href={github} target="_blank">
              <h2 className="underline">Source Code</h2>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[500px] lg:h-[300px] -rotate-2">
          <Image
            src={`/image/${img}.png`}
            alt={alt}
            width={500}
            height={300}
            className="w-full h-40 lg:w-[500px] lg:h-[300px] object-cover object-top border-2 border-black"
          />
        </div>
      </div>

      {/* Shadow */}
      <div className="w-full h-full lg:h-[410px] top-2 -right-2 bg-black absolute -z-10 rounded-2xl"></div>
    </div>
  );
}

export default ProjectItem;
