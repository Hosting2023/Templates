import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/componets/Main/Main'
import Benefits from '@/componets/Benefits/Benefits'
import Apartment from '../componets/Apartament/Apartment';
import Filter from '@/componets/Filter/Filter'
import Calendar from '@/componets/Calendar/Calendar'
import Rewiews from '../componets/Rewiews/Rewiews';
import Questions from '../componets/Questions/Questions';
import Footer from '@/componets/Footer/Footer'
import Services from '../componets/Services/Services';
import { useEffect, useState } from 'react'
import ModalMain from '@/componets/Modal/ModalMain'
import Navbar from '../componets/Navbar/Navbar';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isScreenBelow, setIsScreenBelow] = useState<boolean>(false);
  const [openValue, setOpenValue] = useState<boolean>(false);
  const [contentNum, setContentNum] = useState<number>(0);
  const OpenModal = () => {
    setOpenValue(true)
    setContentNum(0)
  }
  const ShowModal = (val: number) => {
    setOpenValue(true)
    setContentNum(val)
  }
  useEffect(() => {
    const handleResize = () => {
      setIsScreenBelow(window.innerWidth < 740);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      <Benefits />
      {!isScreenBelow ? <Apartment /> : <Services />}
      {
        openValue && <ModalMain
          openValue={openValue}
          contentNum={contentNum}
          ChangeOpen={(val: boolean) => setOpenValue(val)} />
      }
      <Filter />
      <Calendar OpenModal={OpenModal} />
      <Rewiews />
      <Questions />
      <Footer />
    </>
  )
}
