"use client"
import { useEffect } from "react"

import "./ourServiceArea.css"
import Image from "next/image"

import price from "../../images/price.svg"
import plane from "../../images/plane.png"
import hotel from "../../images/hotel.png"
import harbour from "../../images/harbour.png"
import palmIslands from "../../images/palm-islands.png"

import { Open_Sans } from 'next/font/google'
const open_sans = Open_Sans({ subsets: ['latin'] })

import AOS from "aos";
import "aos/dist/aos.css";

export default function OurServiceArea() {
    useEffect(() => {
        AOS.init({
            duration: 700,
        });
    }, []);

    return (
        <div id="brochure" className={`service relative overflow-hidden z-[1] bg-custom ${open_sans.className}`}>
            <div className="black-card-container w-full m-auto flex justify-center">
                <div className="black-card flex gap-3 flex-col items-center h-full" data-aos="zoom-in-right">
                    <Image
                        src={price}
                        alt="price"
                    />
                    <h3 className="text-xl font-semibold text-center">
                        <a href="/">
                            AED 3.2 M* | USD 871 K* | EUR 831 K*  | GBP 692 K*
                        </a>
                    </h3>
                    <p className="font-semibold text-center text-base">Starting Price</p>
                </div>
            </div>

            <div className="service-new-container">
                <div className="service-new-content flex justify-between flex-wrap w-full">
                    <div className="service-new flex items-center bg-white p-5 rounded-lg" data-aos="zoom-in-left">
                        <div className="servicenew-img">
                            <Image
                                src={plane}
                                alt="plane"
                            />
                        </div>
                        <div className="servicenew-content">
                            <h3 className="text-lg text-black font-semibold m-0">20 Minutes from Airport</h3>
                        </div>
                    </div>

                    <div className="service-new flex items-center bg-white p-5 rounded-lg" data-aos="zoom-in-left">
                        <div className="servicenew-img">
                            <Image
                                src={hotel}
                                alt="hotel"
                            />
                        </div>
                        <div className="servicenew-content">
                            <h3 className="text-lg text-black font-semibold m-0">10 Minutes from Downtown</h3>
                        </div>
                    </div>

                    <div className="service-new flex items-center bg-white p-5 rounded-lg" data-aos="zoom-in-left">
                        <div className="servicenew-img">
                            <Image
                                src={harbour}
                                alt="harbour"
                            />
                        </div>
                        <div className="servicenew-content">
                            <h3 className="text-lg text-black font-semibold m-0">5 Minutes from Dubai Creek Harbour</h3>
                        </div>
                    </div>

                    <div className="service-new flex items-center bg-white p-5 rounded-lg" data-aos="zoom-in-left">
                        <div className="servicenew-img">
                            <Image
                                src={palmIslands}
                                alt="palmIslands"
                            />
                        </div>
                        <div className="servicenew-content">
                            <h3 className="text-lg text-black font-semibold m-0">15 Minutes from Palm Jumeriah</h3>
                        </div>
                    </div>

                </div>
            </div>

            <div className="custom-btn flex justify-around mt-10 m-auto">
                <button className=" text-white bg-black text-xl text-center inline-block font-normal relative overflow-hidden">
                    DOWNLOAD BROCHURE
                </button>

                <button className=" text-white bg-black text-xl text-center inline-block font-normal relative overflow-hidden">
                    REGISTER INTEREST
                </button>
            </div>
        </div>
    )
}
