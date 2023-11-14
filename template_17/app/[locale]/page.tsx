import Header from "@/components/Header/Header";
import Benefits from "@/components/Benefits/Benefits";
import About from "@/components/About/About";
import Filter from "@/components/Filter/Filter";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Main/Main";
import Services from "@/components/Services/Services";
import Ad from "@/components/Ad/Ad";
import Slider from "@/components/Slider/Slider";

export default function Home() {
    return (
        <>
            <Header />
            <Main />
            <About />
            <Benefits />
            <Services />
            <Ad />
            <Filter />
            <Slider />
            <Faq />
            <Footer />
        </>
    );
}
