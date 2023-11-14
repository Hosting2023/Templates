import { useTranslations } from "next-intl";
import ServiceItem from "../ServiceItem/ServiceItem";
import { icons } from "./icons";
import { TranslateType } from "@/types";

import styles from "./Services.module.scss";
import Label from "../Label/Label";

const Services = () => {
    const tServices = useTranslations("Services");
    const services: TranslateType = {
        label: tServices("label"),
        title: tServices("title"),
        regularTitle: tServices("regularCleaning.title"),
        regularText: tServices("regularCleaning.text"),
        windowTitle: tServices("windowCleaning.title"),
        windowText: tServices("windowCleaning.text"),
        repairTitle: tServices("afterRepairing.title"),
        repairText: tServices("afterRepairing.text"),
        repairCleaning: tServices("afterRepairing.cleaning"),
        relocationTitle: tServices("afterRelocation.title"),
        relocationText: tServices("afterRelocation.text"),
        relocationCleaning: tServices("afterRelocation.cleaning"),
    };
    return (
        <div className={styles.services} id="services">
            <div className={styles.services__container}>
                <div className={styles.services__wrapper}>
                    <Label item={services.label} />
                    <h2 className={styles.services__wrapper_title}>
                        {services.title}
                    </h2>
                </div>
                <div className={styles.services__container_items}>
                    <ServiceItem
                        imageSrc={icons[0]}
                        title={services.regularTitle}
                        text={services.regularText}
                    />
                    <ServiceItem
                        imageSrc={icons[1]}
                        title={services.windowTitle}
                        text={services.windowText}
                    />
                    <ServiceItem
                        imageSrc={icons[2]}
                        title={services.repairTitle}
                        text={services.repairText}
                        cleaning={services.repairCleaning}
                    />
                    <ServiceItem
                        imageSrc={icons[3]}
                        title={services.relocationTitle}
                        text={services.relocationText}
                        cleaning={services.relocationCleaning}
                    />
                </div>
            </div>
        </div>
    );
};
export default Services;
