import whatsapp from "../../images/whatsapp.png"
import "./whatsapp.css"
import Image from "next/image"

export default function Whatsapp() {
    return (
        <div className='whatsapp-div'>
            <a href="https://api.whatsapp.com/send/?phone=%2B971542337500&text&type=phone_number&app_absent=0" target="_blank">
                <Image
                    src={whatsapp}
                    width={200}
                    height={200}
                    alt="Whatsapp"
                />
            </a>
        </div>
    )
}
