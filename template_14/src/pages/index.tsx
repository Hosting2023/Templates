import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import { Inter } from 'next/font/google'
import Navbar from '@/componets/Navbar/Navbar'
import About from '@/componets/About/About'
import Services from './../componets/Services/Services';
import Filter from '@/componets/Filter/Filter'
import Schedule from '@/componets/Schedule/Schedule'
import Reviews from '@/componets/Reviews/Reviews'
import Contacts from '@/componets/Contacts/Contacts'
import ModalMain from './../componets/ModalMain/ModalMain';
import Benefits from './../componets/Benefits/Benefits';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [openValue, setOpenValue] = useState<boolean>(false);
  const [contentNum, setContentNum] = useState<number>(0);
  const [valueVisit, setValueVisit] = useState<any>(null);
  const OpenModal = () => {
    setOpenValue(true)
    setContentNum(0)
  }

  const GiveValueType = (val: any) => {
    setValueVisit(val)
  }
  const ShowModal = (val: number) => {
    setOpenValue(true)
    setContentNum(val)
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar ShowModal={ShowModal} />
      <Services />
      <Benefits />
      <About />
      <Filter GiveValueType={GiveValueType}/>
      <Schedule OpenModal={OpenModal} valueVisit={valueVisit}/>
      <Reviews />
      <Contacts />


      {
        openValue && <ModalMain
          openValue={openValue}
          contentNum={contentNum}
          ChangeOpen={(val: boolean) => setOpenValue(val)} />
      }

    </>
  )
}
