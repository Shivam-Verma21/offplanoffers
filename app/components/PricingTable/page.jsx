import "./pricingtable.css"

import { Open_Sans } from 'next/font/google'
const open_sans = Open_Sans({ subsets: ['latin'] })

import { Playfair_Display } from 'next/font/google';
const playfair_display = Playfair_Display({ subsets: ['latin'] })

import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import amenities from "../../images/amenities.png"
import investment from "../../images/investment.png"
import location from "../../images/prime location.png"
import residences from "../../images/residences.png"
import views from "../../images/views.png"

export default function PricingTable() {
    return (
        <div id="brochure" className={`pricing-table overflow-hidden ${open_sans.className}`}>
            <div className="pricing-table-container m-auto w-full justify-center">
                <div className="m-auto w-full heading-container">
                    <div className="sectionTitle text-center mb-14">
                        <h2 className={`relative text-4xl pb-5 font-medium ${playfair_display.className}`} data-aos="fade-up">The Element at Sobha One - A New Benchmark in Luxury</h2>
                    </div>
                </div>

                <div className="cards-container">
                    <div className="card card-1 flex flex-col justify-center items-center" data-aos="zoom-in-right">
                        <Image
                            src={location}
                            alt="location"
                        />
                        <h3>Prime Location</h3>
                        <p>Situated in Sobha Hartland, offering easy access to Downtown Dubai, Dubai Creek, and Ras Al Khor Wildlife Sanctuary.</p>
                    </div>

                    <div className="card card-2 flex flex-col justify-center items-center" data-aos="zoom-in-right">
                        <Image
                            src={residences}
                            alt="residences"
                        />
                        <h3>Exclusive Residences</h3>
                        <p>Stylish 2-bedroom apartments with modern interiors, open layouts, and floor-to-ceiling windows.</p>
                    </div>

                    <div className="card card-3 flex flex-col justify-center items-center" data-aos="zoom-in-right">
                        <Image
                            src={views}
                            alt="views"
                        />
                        <h3>Breathtaking Views</h3>
                        <p>Enjoy 270° panoramic views of Dubai’s skyline, Ras Al Khor Wildlife Sanctuary, and a world-class golf course.</p>
                    </div>

                    <div className="card card-4 flex flex-col justify-center items-center" data-aos="zoom-in-right">
                        <Image
                            src={amenities}
                            alt="amenities"
                        />
                        <h3>Luxury Amenities</h3>
                        <p>Includes resort-style pools, landscaped gardens, outdoor lounges, yoga decks, kids' play areas, and wellness zones.</p>
                    </div>

                    <div className="card card-5 flex flex-col justify-center items-center" data-aos="zoom-in-right">
                        <Image
                            src={investment}
                            alt="investment"
                        />
                        <h3>High Investment Potential</h3>
                        <p>Flexible 60/40 payment plan, competitive pricing, and a prime, high-demand location.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}