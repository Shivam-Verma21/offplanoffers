"use client"
import { useEffect } from "react"

import "./about.css"

import { Open_Sans } from 'next/font/google'
const open_sans = Open_Sans({ subsets: ['latin'] })

import { Playfair_Display } from 'next/font/google';
const playfair_display = Playfair_Display({ subsets: ['latin'] })

import Image from "next/image";
// import aboutImage from "../../images/about-image.jpg"
import aboutImage from "../../images/about-image-2.jpg"

import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 700,
        });
    }, []);

    return (
        <div id="about" className={`${open_sans.className} about`}>
            <div className="m-auto w-full about-wrapper">
                <div className="content-div flex flex-col">
                    <span className="text-base">Discover The Element at Sobha One</span>
                    <h2 className={`${playfair_display.className} h2-about mb-5 text-left relative font-medium`}>
                        An Exclusive Opportunity for Multi-Unit Investors
                    </h2>
                    <p className="p-about">
                        The Element at Sobha One offers an exceptional opportunity for multi-unit investors to acquire premium 2-bedroom residences in one of Dubai's most prestigious developments. Nestled in the heart of Sobha Hartland, this luxurious high-rise is designed to inspire, and we are offering a limited selection of 2-bedroom units that are perfect for expanding your investment portfolio.
                    </p>
                    <p className="p-about">
                        With breathtaking 270° panoramic views of the Ras Al Khor Wildlife Sanctuary, the Dubai Skyline, and a world-class golf course, The Element redefines modern luxury. It combines elegant living spaces, exclusive amenities, and a strategic location, ensuring both lifestyle appeal and strong investment potential.
                    </p>
                </div>

                <div className="image-div ">
                    <Image
                        src={aboutImage}
                        // height={100}
                        // width={100}
                        alt="about-image"
                        className="about-img"
                        data-aos="zoom-in"
                    />
                </div>
            </div>
        </div>
    )
}
