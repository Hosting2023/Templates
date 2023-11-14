import AboutMe from "@/components/AboutMe/AboutMe";
import Contact from "@/components/Contact/Contact";
import Filter from "@/components/Filter/Filter";
import Header from "@/components/Header/Header";
import Questions from "@/components/FQA/Questions";
import Schedule from "@/components/Schedule/Schedule";
import Reviews from "@/components/Reviews/Reviews";
import MyServices from "@/components/MyServices/MyServices";

const Home = () => {
  return (
    <>
      <Header />
      <MyServices />
      <AboutMe />
      <Filter />
      <Schedule />
      <Reviews />
      <Questions />
      <Contact />
    </>
  );
};

export default Home;
