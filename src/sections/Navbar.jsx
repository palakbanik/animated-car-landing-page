import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

import logo from "../../public/logo.png";

const menuLists = [
    {
        id: 1,
        title: "Home",
        link: "#home",
    },
    {
        id: 2,
        title: "About",
        link: "#about",
    },
    {
        id: 3,
        title: "Popular",
        link: "#popular",
    },
    {
        id: 4,
        title: "Featured",
        link: "#featured",
    },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setMenuOpen(false);
    };

    return (
        <header className="w-full h-fit sticky top-0 left-0 overflow-visible z-40">
            <div className="relative max-w-[1280px] mx-auto px-6 sm:px-[80px] lg:px-[128px] py-4.5">
                <nav className="flex items-center justify-between">
                    {/* logo */}
                    <a
                        href="#home"
                        className="flex items-center gap-1 cursor-pointer"
                    >
                        <img
                            src={logo}
                            alt="logo"
                            draggable="false"
                            className="w-4 h-4"
                        />
                        <h3 className="font-medium text-[15px] md:text-base leading-[140%] tracking-normal">
                            Elecar
                        </h3>
                    </a>
                    {/* desktop menu */}
                    <div className="hidden md:inline-block">
                        <ul className="flex items-center gap-12">
                            {menuLists.map(({ title, link }, idx) => (
                                <li
                                    key={idx}
                                    onClick={() => handleLinkClick(link)}
                                    className={`font-medium text-base leading-[140%] ${
                                        activeLink === link
                                            ? "text-custom-btn-bg"
                                            : ""
                                    } transition-all hover:scale-95 hover:text-custom-btn-bg`}
                                >
                                    <a href={link}>{title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <AiOutlineMenu />
                    </button>
                </nav>
                {/* mobile menu */}
                <nav
                    className={`w-full h-[640px] flex flex-col items-center justify-center text-custom-text-light bg-custom-text-light/10 backdrop-blur-[96px] opacity-0 absolute ${
                        menuOpen ? "top-0 opacity-100" : "-top-200"
                    } left-0 transition-all duration-700 z-50 ${
                        menuOpen ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                >
                    <ul className="flex flex-col text-center gap-8">
                        {menuLists.map(({ title, link }, idx) => (
                            <li
                                key={idx}
                                onClick={() => handleLinkClick(link)}
                                className={`font-semibold text-xl leading-[140%] ${
                                    activeLink === link
                                        ? "text-custom-btn-bg"
                                        : ""
                                }`}
                            >
                                <a href={link}>{title}</a>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="md:hidden text-[24px] absolute top-4.5 right-6"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <IoCloseSharp />
                    </button>
                </nav>
            </div>
        </header>
    );
}
