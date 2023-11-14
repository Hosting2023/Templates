import AboutMe from '@/src/components/AboutMe/AboutMe';
import Advantages from '@/src/components/Advantages/Advantages';
import Contact from '@/src/components/Contact/Contact';
import Feedbacks from '@/src/components/Feedbacks/Feedbacks';
import Filter from '@/src/components/Filter/Filter';
import Header from '@/src/components/Header/Header';
import MyServices from '@/src/components/MyServices/MyServices';
import Questions from '@/src/components/Questions/Questions';
import Schedule from '@/src/components/Schedule/Schedule';

const Home = () => {
  return (
    <>
      <Header />
      <Advantages />
      <AboutMe />
      <MyServices />
      <Filter />
      <Schedule />
      <Feedbacks />
      <Questions />
      <Contact />
    </>
  );
};

export default Home;
