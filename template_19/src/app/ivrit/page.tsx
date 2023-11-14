import React, {FC} from "react";
import s from './page.module.scss'
import MainScreen from "@/components/MainScreen/MainScreen";
import Rooms from "@/components/Rooms/Rooms";
import AboutMe from "@/components/AboutMe/AboutMe";
import Advantages from "@/components/Advantages/Advantages";
import WorkDescription from "@/components/WorkDescription/WorkDescription";
import EasyHelp from "@/components/EasyHelp/EasyHelp";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import Schedule from "@/components/Schedule/Schedule";

const HomeIvrit: FC = () => {
    return (
        <div className={s.home}>
            <MainScreen langIvrit={true}/>
            <Rooms langIvrit={true}/>
            <AboutMe langIvrit={true}/>
            <Advantages langIvrit={true}/>
            <WorkDescription langIvrit={true}/>
            <Schedule langIvrit={true}/>
            <EasyHelp langIvrit={true}/>
            <Faq langIvrit={true}/>
            <Footer langIvrit={true}/>
        </div>
    )
}

export default HomeIvrit;
