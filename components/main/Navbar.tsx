
import { Socials } from "../../constants/index";
import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <div className="w-full h-[65px] absolute top-0   z-50 px-20">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto mt-2">
                <a
                    href="#about-me"
                    className="h-auto w-auto flex flex-row items-center"
                >
                    <h1 className="font-bold text-2xl hidden md:block text-gray-300">
                        Dev Portfolio
                    </h1>
                </a>

                <div className="flex flex-row gap-5 mr-8">
                <div className="flex flex-row gap-7 mr-5 align-middle">
                    <a href="#skills" className="cursor-pointer text-white text-l">
                        Skills
                    </a>
                    <a href="#projects" className="cursor-pointer text-white">
                        Projects
                    </a>
                </div>
                <div className="flex flex-row gap-7 mr-5">
                    {Socials.map((social) => (
                        <a href={social.link}
                        target="_blank"
                        key={social.name}>
                        <Image
                            src={social.src}
                            alt={social.name}
                            width={30}
                            height={35}
                        />
                        </a>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;