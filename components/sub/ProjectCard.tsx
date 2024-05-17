import Image from "next/image";
import React from "react";

interface Props {
  link: string;
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ link, src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-[30] md:w-[33%] ">
     <a href={link}
     target="_blank"
     className="cursor-pointer">
      <Image
        src={src}
        alt={title}
        width={600}
        height={600}
        className="w-full object-contain cursor-pointer"
      />
      </a>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;