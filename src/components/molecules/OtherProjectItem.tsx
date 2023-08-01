import Image from "next/image";
import Link from "next/link";
import React from "react";

interface OtherProjectProps {
  category: "mobile" | "website" | string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  href?: string;
}

function OtherProjectItem(props: OtherProjectProps) {
  const { category, title, description, tech, github, href } = props;

  const icon =
    category === "mobile" ? (
      <Image
        src={"/image/ic-phone.png"}
        width={24}
        height={34}
        alt="ic-mobile"
      />
    ) : (
      <Image
        src={"/image/ic-monitor.png"}
        width={34}
        height={34}
        alt="ic-computer"
      />
    );

  return (
    <>
      {href ? (
        <div className="relative z-10">
          <Link href={href} target="_blank">
            <div className="bg-white dark:bg-[#333333] border-2 border-black rounded-2xl w-full p-[30px] h-[340px] ">
              <div className="flex justify-between items-start mr-12 ">
                <Image
                  src={"/icon/ic-folder.svg"}
                  width={90}
                  height={90}
                  alt="ic-folder"
                />
                <div>{icon}</div>
              </div>

              <div className="mt-6 flex flex-col justify-between h-[60%]">
                <div>
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <p className="mt-4 line-clamp-3 ">{description}</p>
                </div>
                <div className="mt-6 flex gap-x-4">
                  {tech.map((techStack) => (
                    <h5
                      className="text-gray-500 dark:text-[#A1CCD1] font-light text-sm"
                      key={techStack}
                    >
                      {techStack}
                    </h5>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-black rounded-2xl w-full h-[340px] absolute top-[6px] -right-[6px] -z-10 "></div>
          </Link>
          <Link
            href={github}
            target="_blank"
            className="absolute top-[31px] right-8 z-10"
          >
            <Image
              src={"/icon/ic-github.svg"}
              width={34}
              height={34}
              alt="ic-github"
            />
          </Link>
        </div>
      ) : (
        <div className="relative z-10">
          <div className="bg-white dark:bg-[#333333] border-2 border-black rounded-2xl w-full p-[30px] h-[340px]">
            <div className="flex justify-between items-start mr-12">
              <Image
                src={"/icon/ic-folder.svg"}
                width={90}
                height={90}
                alt="ic-folder"
              />
              <div>{icon}</div>
            </div>

            <div className="mt-6 flex flex-col justify-between h-[60%]">
              <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-4 line-clamp-3 ">{description}</p>
              </div>
              <div className="mt-6 flex gap-x-4">
                {tech.map((techStack) => (
                  <h5
                    className="text-gray-500 dark:text-[#A1CCD1] font-light text-sm"
                    key={techStack}
                  >
                    {techStack}
                  </h5>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black rounded-2xl w-full h-[340px] absolute top-[6px] -right-[6px] -z-10 "></div>
          <Link
            href={github}
            target="_blank"
            className="absolute top-[30px] right-8 z-10"
          >
            <Image
              src={"/icon/ic-github.svg"}
              width={34}
              height={34}
              alt="ic-github"
            />
          </Link>
        </div>
      )}
    </>
  );
}

export default OtherProjectItem;
