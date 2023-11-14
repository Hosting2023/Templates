import React, { FC, useContext, useEffect, useRef } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Benefits from '@/components/benefits';
import AboutMe from '@/components/aboutMe';
import Services from '@/components/Services';
import Filter from '@/components/filter';
import Schedule from '@/components/schedule';
import Reviews from '@/components/reviewsNew';
import Info from '@/components/info';
import { AppContext } from '../_app';

const IndexPage: FC = () => {
  const Heb = useContext(AppContext);
  const benefitsRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const scheduleRef = useRef<HTMLDivElement | null>(null);
  const reviewsRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const html = document.querySelector('html');
    if (Heb) {
      html?.setAttribute('dir', 'rtl');
    } else {
      html?.setAttribute('dir', 'ltr');
    }
  }, []);

  return (
    <>
      <Header
        benefitsRef={benefitsRef}
        aboutMeRef={aboutMeRef}
        servicesRef={filterRef}
        filterRef={filterRef}
        scheduleRef={scheduleRef}
        reviewsRef={reviewsRef}
        footerRef={footerRef}
      />
      <div ref={benefitsRef}>
        <Benefits />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={filterRef}>
        <Filter />
      </div>
      <div ref={scheduleRef}>
        <Schedule />
      </div>
      <div ref={reviewsRef}>
        <Reviews />
      </div>
      <Info />
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;
