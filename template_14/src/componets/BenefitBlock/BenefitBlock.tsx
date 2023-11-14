import { FC } from "react";
import styles from "./BenefitBlock.module.scss";
import Image from 'next/image';

interface IBenefit {
   title: string;
   description: string;
   img: string;
}

const BenefitBlock: FC<IBenefit> = ({ title, description, img }) => (
   <div className={styles.benefits_blocks_block}>
      <div className={styles.benefits_blocks_block_img}>
         <Image src={img} alt="icon" layout="responsive" />
      </div>
      <div className={styles.benefits_blocks_block_title}>{title}</div>
      <div className={styles.benefits_blocks_block_text}>{description}</div>
   </div>
);


export default BenefitBlock;
