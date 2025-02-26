"use client"
import { useState } from "react";
import logo from "../../images/logo.svg"
import Image from "next/image";
import "./header.css"

export default function Header() {
    const [menu, setmenu] = useState(false)

    return (
        <>
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
                    <ul className="flex items-center justify-center gap-3">
                        <li className="home">HOME</li>
                        <li className="text-white">ABOUT</li>
                        <li className="text-white">AMENITIES</li>
                        <li className="text-white">BROCHURE</li>
                        <li className="text-white">GALLERY</li>
                        <li className="text-white">CONTACT</li>
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
                <ul className="flex flex-col gap-3 pl-6 py-6">
                    <li className="home">HOME</li>
                    <li className="text-white">ABOUT</li>
                    <li className="text-white">AMENITIES</li>
                    <li className="text-white">BROCHURE</li>
                    <li className="text-white">GALLERY</li>
                    <li className="text-white">CONTACT</li>
                </ul>
            </div>
        </>
    );
}