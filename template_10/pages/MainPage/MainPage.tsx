import Head from "next/head";
// import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import WhyMe from "@/components/WhyMe/WhyMe";
import Filter from "@/components/Filter/Filter";
import Schedule from "@/components/Schedule/Schedule";
import Reviews from "@/components/Reviews/Reviews";
import FQA from "@/components/FQA/FQA";
import Contacts from "@/components/Contacts/Contacts";
import Main from "@/components/Main/Main";
import { useState } from "react";
import ModalMain from "@/components/Modal/ModalMain";

// const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  const [openValue, setOpenValue] = useState<boolean>(false);
  const [contentNum, setContentNum] = useState<number>(0);
  const OpenModal = () => {
    setOpenValue(true);
    setContentNum(0);
  };
  const ShowModal = (val: number) => {
    setOpenValue(true);
    setContentNum(val);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar ShowModal={ShowModal} />
      <Main />
      <Services />
      <About />
      <WhyMe />
      <Filter />
      <Schedule OpenModal={OpenModal} />
      <Reviews />
      <FQA />
      <Contacts />
      {openValue && (
        <ModalMain
          openValue={openValue}
          contentNum={contentNum}
          ChangeOpen={(val: boolean) => setOpenValue(val)}
        />
      )}
      <div className="space"></div>
    </>
  );
};

export default HomePage;
