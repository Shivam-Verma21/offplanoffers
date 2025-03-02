"use client"
import React, { useState, useRef } from 'react';
import "./amenities.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import { Playfair_Display } from 'next/font/google';
const playfair_display = Playfair_Display({ subsets: ['latin'] })

import { Open_Sans } from 'next/font/google'
const open_sans = Open_Sans({ subsets: ['latin'] })

import Image from "next/image";
import bbq from "../../images/bbq.png"
import business from "../../images/business-lounge.png"
import gym from "../../images/gym.png"
import jacuzzi from "../../images/jacuzzi.png"
import kids from "../../images/kids.png"
import roof from "../../images/roof-top-lounge.png"

function CustomPagination({ totalSlides, currentSlide, goToSlide }) {
    return (
        <div className="amenities-custom-pagination relative">
            {Array.from({ length: totalSlides }).map((_, index) => (
                <span
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                />
            ))}
        </div>
    );
}

export default function Amenities() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null);

    const handleSlideChange = () => {
        setCurrentSlide(swiperRef.current.swiper.realIndex);
    };

    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    const nextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const prevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div id="amenities" className={`amenities-div m-auto w-full ${playfair_display.className}`}>
            <div className="m-auto w-full heading-container relative">
                <div className="sectionTitle text-center mb-14">
                    <h2 className="relative text-4xl pb-5 font-medium">Exclusive Amenities, Designed for You</h2>
                </div>

                <div className="slider-container relative">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        onSlideChange={handleSlideChange}
                        ref={swiperRef}
                        navigation
                        loop
                        slidesPerView={1}
                        breakpoints={{
                            400: {
                                slidesPerView: 2
                            },
                            800: {
                                slidesPerView: 3
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        speed={1500}
                    >
                        <button
                            className='amenities-arrow-btn rounded-sm amenities-arrow-btn-left'
                            onClick={prevSlide}
                        >
                            <i className="fa-solid fa-angle-left text-gray-600"></i>
                        </button>

                        <SwiperSlide>
                            <div className="amenities-img-div">
                                <Image
                                    src={bbq}
                                    alt="bbq"
                                    className="object-cover amenities-gallery-img w-full"
                                />
                                <div className="img-content">
                                    <h3>BBQ & Dining Area</h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="amenities-img-div">
                                <Image
                                    src={business}
                                    alt="business"
                                    className="object-cover amenities-gallery-img w-full"
                                />
                                <div className="img-content">
                                    <h3>Business Lounge</h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="amenities-img-div">
                                <Image
                                    src={gym}
                                    alt="gym"
                                    className="object-cover amenities-gallery-img w-full"
                                />
                                <div className="img-content">
                                    <h3>Outdoor Gym</h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="amenities-img-div">
                                <Image
                                    src={jacuzzi}
                                    alt="jacuzzi"
                                    className="object-cover amenities-gallery-img w-full"
                                />
                                <div className="img-content">
                                    <h3>Jacuzzi</h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="amenities-img-div">
                                <Image
                                    src={kids}
                                    alt="kids"
                                    className="object-cover amenities-gallery-img w-full"
                                />
                                <div className="img-content">
                                    <h3>Kids Play Area</h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="amenities-img-div">
                                <Image
                                    src={roof}
                                    alt="roof"
                                    className="object-cover amenities-gallery-img w-full"
                                />
                                <div className="img-content">
                                    <h3>Roof Top Lounge</h3>
                                </div>
                            </div>
                        </SwiperSlide>


                        <button
                            className='amenities-arrow-btn rounded-sm amenities-arrow-btn-right'
                            onClick={nextSlide}
                        >
                            <i className="fa-solid fa-angle-right text-gray-600"></i>
                        </button>
                    </Swiper>
                    <CustomPagination totalSlides={6} currentSlide={currentSlide} goToSlide={goToSlide} />
                </div>
            </div>
        </div>
    )
}