// import logo from "@/app/images/logo.svg"
import logo from "../../images/logo.svg"
import Image from 'next/image'
import "./footer.css"

import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ['latin'] })

export default function Footer() {
    return (
        <footer className={`flex flex-col gap-6 justify-center items-center footer pt-7 pb-5 ${open_sans.className}`}>
            <a href="/" className="no-underline">
                <Image
                    src={logo}
                    width={200}
                    height={200}
                    alt="Logo"
                />
            </a>
            <p className="text-white font-normal text-center">Copyright © 2025 Sobha Realty. All Rights Reserved</p>
        </footer>
    )
}