import About from "./components/About/page";
import Amenities from "./components/Amenities/page";
import Contact from "./components/Contact/page";
import Footer from "./components/Footer/page";
import Gallery from "./components/Gallery/page";
import Header from "./components/Header/page";
import NewsLetter from "./components/NewsLetter/page";
import OurServiceArea from "./components/OurServiceArea/page";
import Sobha from "./components/Sobha/page";
import Whatsapp from "./components/Whatsapp/page";

export default function Home() {
  return (
    <>
      <Header />
      <Sobha />
      <About />
      <OurServiceArea />
      <Gallery />
      <NewsLetter />
      <Amenities />
      <Contact />
      <Footer />
      <Whatsapp />
    </>
  );
}
