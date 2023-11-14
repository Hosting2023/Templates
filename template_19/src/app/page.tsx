import React, {FC} from "react";
import s from "./page.module.css";
import MainScreen from "@/components/MainScreen/MainScreen";
import Rooms from "@/components/Rooms/Rooms";
import AboutMe from "@/components/AboutMe/AboutMe";
import Advantages from "@/components/Advantages/Advantages";
import WorkDescription from "@/components/WorkDescription/WorkDescription";
import EasyHelp from "@/components/EasyHelp/EasyHelp";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import Schedule from "@/components/Schedule/Schedule";
// import Auth from "@/components/Auth/Auth";

import {Provider, store} from "@hosting2023/redux-lib";


const Home: FC = () => {
    return (
        <Provider store={store}>
            <div className={s.home}>
                <MainScreen langIvrit={false}/>
                <Rooms langIvrit={false}/>
                <AboutMe langIvrit={false}/>
                <Advantages langIvrit={false}/>
                <WorkDescription langIvrit={false}/>
                <Schedule langIvrit={false}/>
                <EasyHelp langIvrit={false}/>
                <Faq langIvrit={false}/>
                <Footer langIvrit={false}/>
            </div>
        </Provider>
    );
};

export default Home;
