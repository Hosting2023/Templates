import { FC } from "react";
import { useTranslation } from "react-i18next";

// import styles from './Home.module.scss';
import Header from "@/components/header/Header";
import Card from "@/components/card/Card";
import Pros from "@/components/pros/Pros";
import Banner from "@/components/banner/Banner";
import Reviews from "@/components/reviews/Reviews";
import Steps from "@/components/steps/Steps";
import Filter from "@/components/filter/Filter";
import Schedule from "@/components/schedule/Schedule";
import Questions from "@/components/questions/Questions";
import Contacts from "@/components/contacts/Contacts";

const Home: FC = () => {
  const { t } = useTranslation();

  const isEng = t("header_title") === "maid services";

  return (
    <div style={isEng ? { direction: "ltr" } : { direction: "rtl" }}>
      <Header />
      <Card />
      <Pros />
      <Banner />
      <Reviews />
      <Steps />
      <Filter />
      <Schedule />
      <Questions />
      <Contacts />
    </div>
  );
};

export default Home;
