import "./newsletter.css"

import Image from "next/image"
import magazine from "../../images/magazine.webp"

import AOS from "aos";
import "aos/dist/aos.css";

import { Open_Sans } from 'next/font/google'
const open_sans = Open_Sans({ subsets: ['latin'] })

export default function NewsLetter() {
    return (
        <div className={`newsletter-container overflow-hidden ${open_sans.className}`}>
            <div className="newsletter-main">
                <div className="newsletter-content-1" data-aos="zoom-in-right">
                    <Image
                        src={magazine}
                        alt="magazine"
                    />
                </div>

                <div className="newsletter-content-2" data-aos="zoom-in">
                    <h3>Exclusive 2-Bedroom Apartment Now Available - Get Your Brochure & Floor Plan Today!</h3>
                    <div>
                        <a href="" className="nl-anchor">
                            Download Now
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}