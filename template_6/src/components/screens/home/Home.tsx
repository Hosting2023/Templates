import AboutMe from '@/components/AboutMe/AboutMe';
import Advantages from '@/components/Advantages/Advantages';
import Bath from '@/components/Bath/Bath';
import Contact from '@/components/Contact/Contact';
import Feedbacks from '@/components/Feedbacks/Feedbacks';
import Filter from '@/components/Filter/Filter';
import Header from '@/components/Header/Header';
import MyServices from '@/components/MyServices/MyServices';
import Schedule from '@/components/Schedule/Schedule';

const Home = () => {
  return (
    <>
      <Header />
      <Advantages />
      <Bath />
      <MyServices />
      <AboutMe />
      <Filter />
      <Schedule />
      <Feedbacks />
      <Contact />
    </>
  );
};

export default Home;
