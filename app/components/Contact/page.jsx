"use client"

import "./contact.css"

import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

import Image from "next/image"
import contactBg from "../../images/contact-bg.jpg"

export default function Contact() {
    const [phone, setPhone] = useState('');
    return (
        <div id="contact">
            <div className="relative overflow-hidden contact-container">
                <Image
                    src={contactBg}
                    alt="contact-background"
                    className="contact-bg absolute left-2/4 w-auto filter-none"
                />
                <div className="contactArea">
                    <div className="form-container m-auto w-full flex gap-5 xl:gap-8">
                        <div className="form-content pl-8 pt-8 text-white">
                            <h2 className="text-4xl mb-5 mt-3 relative text-center">REGISTER YOUR INTEREST</h2>
                            <p className="mt-7 leading-7 mb-4">Experience unparalleled luxury, premium craftsmanship, and a lifestyle designed for modern living. Simply fill in your details below, and our team will get in touch with you with more information.</p>
                            <div>
                                <ul className="flex gap-4 justify-start">
                                    <li>
                                        <a href="https://api.whatsapp.com/send/?phone=%2B971542337500&text&type=phone_number&app_absent=0" target="_blank" className="text-white">
                                            <i className="fa-brands fa-whatsapp"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+971 54 233 7500" className="text-white">
                                            <i className="fa-solid fa-phone"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="form-div m-auto">
                            <form action="" className="form flex flex-col gap-4">
                                <div className="name-country flex gap-4">
                                    <input type="text" name="name" id="" placeholder="Your Name" />
                                    <div className="select-div">
                                        <PhoneInput
                                            defaultCountry="ae"
                                            value={phone}
                                            onChange={(phone) => setPhone(phone)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <input type="email" name="" id="" placeholder="Email" />
                                </div>
                                <div>
                                    <textarea name="" id="" placeholder="Description..."></textarea>
                                </div>
                                <button>APPOINTMENT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}