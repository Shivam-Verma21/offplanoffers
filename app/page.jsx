import About from "./components/About/page";
import Amenities from "./components/Amenities/page";
import Footer from "./components/Footer/page";
import Gallery from "./components/Gallery/page";
import Header from "./components/Header/page";
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
      <Amenities />
      <Footer />
      <Whatsapp />
    </>
  );
}
