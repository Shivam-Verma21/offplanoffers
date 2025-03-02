"use client"
import { useEffect, useState, useRef } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import AOS from "aos";
import "aos/dist/aos.css";

import "./gallery.css"

import { Playfair_Display } from 'next/font/google';
const playfair_display = Playfair_Display({ subsets: ['latin'] })

import Image from "next/image";
import gallery1 from "../../images/gallery-1.jpg"
import gallery2 from "../../images/gallery-2.jpg"
import gallery3 from "../../images/gallery-3.jpg"
import gallery4 from "../../images/gallery-4.jpg"
import gallery5 from "../../images/gallery-5.jpg"
import gallery6 from "../../images/gallery-6.jpg"
import gallery7 from "../../images/gallery-7.jpg"
import gallery8 from "../../images/gallery-8.jpg"


function CustomPagination({ totalSlides, currentSlide, goToSlide }) {
    return (
        <div className="custom-pagination relative">
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

export default function Gallery() {
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

    return (
        <div id="gallery" className={`gallery-div ${playfair_display.className}`}>
            <div className="m-auto w-full heading-container">
                <div className="sectionTitle text-center mb-14">
                    <h2 className="relative text-4xl pb-5 font-medium" data-aos="fade-up">Project Pictures</h2>
                </div>
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
                        800:{
                            slidesPerView:2
                        },
                        1024:{
                            slidesPerView:3
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={1500}
                >
                    <SwiperSlide>
                        <div className="img-div">
                            <Image
                                src={gallery1}
                                alt="gallery1"
                                className="object-cover gallery-img w-full"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="img-div">
                            <Image
                                src={gallery2}
                                alt="gallery2"
                                className="object-cover gallery-img w-full"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="img-div">
                            <Image
                                src={gallery3}
                                alt="gallery3"
                                className="object-cover gallery-img w-full"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="img-div">
                            <Image
                                src={gallery4}
                                alt="gallery4"
                                className="object-cover gallery-img w-full"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="img-div">
                            <Image
                                src={gallery5}
                                alt="gallery5"
                                className="object-cover gallery-img w-full"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="img-div">
                            <Image
                                src={gallery6}
                                alt="gallery6"
                                className="object-cover gallery-img w-full"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="img-div">
                            <Image
                                src={gallery7}
                                alt="gallery7"
                                className="object-cover gallery-img w-full"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="img-div">
                            <Image
                                src={gallery8}
                                alt="gallery8"
                                className="object-cover gallery-img w-full"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <CustomPagination totalSlides={8} currentSlide={currentSlide} goToSlide={goToSlide} />
            </div>
        </div>
    )
}