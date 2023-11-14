import styles from './page.module.css'
import MainScreen from "@/components/MainSceen/MainScreen";
import Header from "@/components/Header/Header";
import React from "react";

const Home = () => {
    return (
        <div className={styles.home}>
            <Header/>
            <MainScreen/>
        </div>
    )
}

export default Home;
