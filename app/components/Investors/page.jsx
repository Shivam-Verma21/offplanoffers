import "./investors.css"

import { Open_Sans } from 'next/font/google'
const open_sans = Open_Sans({ subsets: ['latin'] })

import { Playfair_Display } from 'next/font/google';
const playfair_display = Playfair_Display({ subsets: ['latin'] })

import AOS from "aos";
import "aos/dist/aos.css";

export default function Investors() {
    return (
        <div className={`investors overflow-hidden ${open_sans.className}`}>
            <div className="investors-container m-auto w-full justify-center">
                <div className="m-auto w-full heading-container">
                    <div className="sectionTitle text-center mb-14">
                        <h2 className={`relative text-4xl pb-5 font-medium ${playfair_display.className}`} data-aos="fade-up">Key Advantages for Investors</h2>
                    </div>
                </div>

                <div className="investors-cards-container">
                    <div className="investors-card investors-card-1 flex flex-col justify-center items-center" data-aos="zoom-in-left">
                        <p>Opportunity to own multiple 2-bedroom units in a prime development.</p>
                    </div>
                    <div className="investors-card investors-card-2 flex flex-col justify-center items-center" data-aos="zoom-in-left">
                        <p>High rental yield potential and strong appreciation value.</p>
                    </div>
                    <div className="investors-card investors-card-3 flex flex-col justify-center items-center" data-aos="zoom-in-left">
                        <p>Exclusive amenities designed for a luxury lifestyle. </p>
                    </div>
                    <div className="investors-card investors-card-4 flex flex-col justify-center items-center" data-aos="zoom-in-left">
                        <p>Attractive pricing in one of Dubai's most sought-after locations. </p>
                    </div>
                    <div className="investors-card investors-card-5 flex flex-col justify-center items-center" data-aos="zoom-in-left">
                        <p>Special discounts on multi-unit purchases providing you greater investment value.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}