"use client";
import ProjectItem from "@/components/molecules/ProjectItem";
import React, { useEffect } from "react";
import OtherProject from "./OtherProject";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

function Project() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Project");
    }
  }, [inView, setActiveSection]);
  const projectList = [
    {
      id: 1,
      title: "Takaya Group",
      tech: ["nextjs", "tailwindcss"],
      description:
        "Build a profile company website for Takaya Group using nextjs and tailwindcss, also manage the hosting for this page.",
      href: "https://takayagroup.com",
      github: "https://github.com/muharrir/luxury-rentcar-v1.1",
      img: "project-takaya",
      bgColor: "#AAC8A7",
      buttonColor: "#53C966",
    },
    {
      id: 2,
      title: "Galleriku",
      tech: ["nextjs", "tailwindcss"],
      description:
        "Build a portfolio for the client that contain a project shoot as a wedding photographer. This website are build with nextjs and tailwindcss, and also it is",
      href: "https://storegg-v1.vercel.app/",
      github: "https://github.com/muharrir/storegg",
      img: "project-storegg",

      bgColor: "#FF9B9B",
      buttonColor: "#FF5656",
    },
    {
      id: 3,
      title: "Luxury RentCar",
      tech: ["nextjs", "tailwindcss", "expressjs", "MySQL"],
      description:
        "Build a website for people who wants to rent a car, built with Nextjs, tailwindcss, expressjs, and mysql for database",
      href: "https://github.com/muharrir/luxury-rentcar-v1.1",
      github: "https://github.com/muharrir/luxury-rentcar-v1.1",
      img: "project-luxury",
      bgColor: "#A1CCD1",
      buttonColor: "#567DE3",
    },
  ];

  return (
    <section
      className="px-6 my-10 lg:my-[50px] lg:py-10 lg:px-48"
      id="project"
      ref={ref}
    >
      <div className="relative w-fit">
        <h1 className="bg-green-500 w-60 lg:w-72 h-14 lg:h-16 flex items-center justify-center rounded-full border-2 border-black text-2xl lg:text-[26px] font-medium text-black">
          Featured Project
        </h1>
        <div className="w-60 lg:w-72 h-14 lg:h-16 rounded-full border-2 border-black absolute bg-black top-1 -right-1 -z-10"></div>
      </div>
      <div className="mt-[50px] space-y-10">
        {projectList.map((v, i) => (
          <ProjectItem
            key={i}
            title={v.title}
            tech={v.tech}
            description={v.description}
            href={v.href}
            github={v.github}
            img={v.img}
            alt={v.img}
            bgColor={v.bgColor}
            btnColor={v.buttonColor}
          />
        ))}
      </div>
      <OtherProject />
    </section>
  );
}

export default Project;
