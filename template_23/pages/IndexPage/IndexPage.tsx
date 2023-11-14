import React, { FC, useRef } from "react";
import style from "./indexPage.module.scss";
import Preview from "@/components/Preview";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import DetailedInfo from "@/components/DetailedInfo";
import Feedback from "@/components/Feedback";
import Filter from "@/components/Filter";
import Questions from "@/components/Questions";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const IndexPage: FC = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const scheduleRef = useRef<HTMLDivElement | null>(null);
  const reviewsRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className={style.body}>
      <Header
        servicesRef={servicesRef}
        scheduleRef={scheduleRef}
        reviewsRef={reviewsRef}
      />
      <Preview  servicesRef={servicesRef}/>
      <About />
      <Benefits />
      <DetailedInfo />
      <div ref={servicesRef}>
        <Filter />
      </div>
      <div ref={scheduleRef}>
        <Schedule />
      </div>
      <div ref={reviewsRef}>
        <Feedback />
      </div>
      <Questions />
      <Footer />
    </div>
  );
};

export default IndexPage;
