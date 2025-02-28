"use client"
import { useState } from "react";
import logo from "../../images/logo.svg"
import Image from "next/image";
import "./header.css";

import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ['latin'] })

export default function Header() {
    const [menu, setmenu] = useState(false)

    return (
        <div className={`header-div ${open_sans.className}`}>
            <header className="header flex justify-between pt-4 pl-4 pb-4 pr-4">
                <div className="logo-div ">
                    <a href="/" className="no-underline">
                        <Image
                            src={logo}
                            width={190}
                            height={190}
                            alt="Logo"
                        />
                    </a>
                </div>

                <div className="list-div pt-3">
                    <ul className="flex items-center justify-center gap-3 lg:gap-6">
                        <li className="home cursor-pointer"><a href="/">HOME</a></li>
                        <li className="text-white cursor-pointer"><a href="#about">ABOUT</a></li>
                        <li className="text-white cursor-pointer"><a href="#amenities">AMENITIES</a></li>
                        <li className="text-white cursor-pointer"><a href="#brochure">BROCHURE</a></li>
                        <li className="text-white cursor-pointer"><a href="#gallery">GALLERY</a></li>
                        <li className="text-white cursor-pointer"><a href="#contact">CONTACT</a></li>
                    </ul>
                </div>

                <div
                    className="span-div flex flex-col items-center justify-center"
                    onClick={() => setmenu(!menu)}
                >
                    <span className="first bg-white block w-5"></span>
                    <span className="second bg-white block w-5"></span>
                    <span className="third bg-white block w-5"></span>
                </div>
            </header>

            <div className={`menu-div ${menu ? 'show' : ''}`}>
                <ul className="flex flex-col gap-4 pl-6 py-5">
                    <li className="home text-sm cursor-pointer" onClick={() => setmenu(!menu)}>
                        <a href="/">HOME</a>
                    </li>
                    <li className="text-white text-sm cursor-pointer" onClick={() => setmenu(!menu)}>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li className="text-white text-sm cursor-pointer" onClick={() => setmenu(!menu)}>
                        <a href="#amenities">AMENITIES</a>
                    </li>
                    <li className="text-white text-sm cursor-pointer" onClick={() => setmenu(!menu)}>
                        <a href="#brochure">BROCHURE</a>
                    </li>
                    <li className="text-white text-sm cursor-pointer" onClick={() => setmenu(!menu)}>
                        <a href="#gallery">GALLERY</a>
                    </li>
                    <li className="text-white text-sm cursor-pointer" onClick={() => setmenu(!menu)}>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}