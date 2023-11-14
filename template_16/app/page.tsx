"use client";
import React, { useState } from 'react';
import Header from '@/components/header/Header'
import Benefits from '@/components/benefits/Benefits'
import Slider from '@/components/slider/Slider'
import Filter from '@/components/filter/Filter'
import Reviews from '@/components/reviews/Reviews'
import Questions from '@/components/questions/Questions'
import Contacts from '@/components/contacts/Contacts'
import Modal from '@/components/modal/Modal'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsLoggedIn(true)
    setIsModalOpen(false);
  };
  
  return (
    <div>
    {!isLoggedIn ? <Modal onClose={closeModal}/> : (
      <div>
        <Header />
        <Benefits />
        <Slider />
        <Filter />
        <Reviews />
        <Questions />
        <Contacts />
      </div>
    )}
  </div>
  )
}
