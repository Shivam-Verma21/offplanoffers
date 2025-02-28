"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import "./sobha.css"
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";

import slide1 from "../../images/slide-1.jpg"
import slide2 from "../../images/slide-2.jpg"

import { Open_Sans } from 'next/font/google'
const open_sans = Open_Sans({ subsets: ['latin'] })

import { Playfair_Display } from 'next/font/google';
const playfair_display = Playfair_Display({ subsets: ['latin'] })

function CustomPagination({ totalSlides, currentSlide, goToSlide }) {
    return (
        <div className="custom-pagination absolute">
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

export default function Sobha() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 700,
        });
    }, []);

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
        <div className={`relative swiper-div overflow-hidden ${open_sans.className}`}>
            <Swiper
                modules={[Pagination, Autoplay]}
                onSlideChange={handleSlideChange}
                ref={swiperRef}
                navigation
                loop
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1500}
            >
                <SwiperSlide>
                    <div className="relative w-full">
                        <Image
                            src={slide1}
                            alt="slide-1"
                            className="object-cover slide-img w-full h-auto brightness-[0.60]"
                        />
                        <div className="content absolute left-5 -translate-y-1/2 text-white p-4 sm:left-20 md:left-40 overflow-hidden" data-aos="fade-up">
                            <p className='text-base font-light'>SOBHA REALTY</p>
                            <h2 className={`text-2xl font-normal mt-3 ${playfair_display.className}`}>THE ELEMENT</h2>
                            <button className='brochure-btn mt-5 px-6 py-3 bg-blue-600 text-white font-normal text-sm'>DOWNLOAD BROCHURE</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full">
                        <Image
                            src={slide2}
                            alt="slide-2"
                            className="object-cover slide-img w-full h-auto brightness-[0.60]"
                        />
                        <div className="content absolute left-5 -translate-y-1/2 text-white p-4 sm:left-20 md:left-40 overflow-hidden" data-aos="fade-up">
                            <p className='text-base font-light'>SOBHA REALTY</p>
                            <h2 className={`text-2xl font-normal mt-3 ${playfair_display.className}`}>THE ELEMENT</h2>
                            <button className='brochure-btn mt-5 px-6 py-3 bg-blue-600 text-white font-normal text-sm'>DOWNLOAD BROCHURE</button>
                        </div>
                    </div>
                </SwiperSlide>

                <button
                    className='arrow-btn rounded-sm arrow-btn-left hidden bg-transparent hover:bg-white'
                    onClick={prevSlide}
                >
                    <i className="fa-solid fa-angle-left text-white"></i>
                </button>

                <button
                    className='arrow-btn rounded-sm arrow-btn-right hidden bg-transparent hover:bg-white'
                    onClick={nextSlide}
                >
                    <i className="fa-solid fa-angle-right text-white"></i>
                </button>
            </Swiper>
            <CustomPagination totalSlides={2} currentSlide={currentSlide} goToSlide={goToSlide} />
        </div>
    );
}
