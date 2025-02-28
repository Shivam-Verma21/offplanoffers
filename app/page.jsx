import About from "./components/About/page";
import Footer from "./components/Footer/page";
import Header from "./components/Header/page";
import Sobha from "./components/Sobha/page";
import Whatsapp from "./components/Whatsapp/page";

export default function Home() {
  return (
    <>
      <Header />
      <Sobha />
      <Footer />
      <Whatsapp />
      <About />
    </>
  );
}
