import benefit_icon_1 from "@/public/benefit_icon_1.svg";
import benefit_icon_2 from "@/public/benefit_icon_2.svg";
import benefit_icon_3 from "@/public/benefit_icon_3.svg";
import benefit_icon_4 from "@/public/benefit_icon_4.svg";
import people_1 from "@/public/people_1.svg";
import people_2 from "@/public/people_2.svg";

export interface IBenefit {
  title: string;
  description: string;
  img: string;
}

export const dataBenefits: IBenefit[] = [
  {
    title: "Customizable",
    description:
      "Customizable cleaning services to meet your specific preferences",
    img: benefit_icon_1,
  },
  {
    title: "Thorough cleaning",
    description: "Provide thorough cleaning services",
    img: benefit_icon_2,
  },
  {
    title: "Time-saving",
    description:
      "Save you time and effort by taking care of the cleaning for you",
    img: benefit_icon_3,
  },
  {
    title: "Consistent results",
    description: "Striving for consistent purity level results",
    img: benefit_icon_4,
  },
];

export interface IReview {
  text: string;
  name: string;
  img: string;
}

export const sliders: IReview[] = [
  {
    text: "The maid at my hotel was very friendly and professional. She cleaned my room every day and I was very pleased with the result of her work. I would recommend her to all my friends and acquaintances who are looking for a reliable and professional hotel room cleaner.",
    name: "John Thomas",
    img: people_1,
  },
  {
    text: "I was impressed with the quality of work of the maid who cleaned our hotel room. She was very attentive to detail and went out of her way to make the space look perfect. I would recommend her to all my friends and family!",
    name: "Susan Davis",
    img: people_2,
  },
  {
    text: "The maid at my hotel was very friendly and professional. She cleaned my room every day and I was very pleased with the result of her work. I would recommend her to all my friends and acquaintances who are looking for a reliable and professional hotel room cleaner.",
    name: "John Thomas",
    img: people_1,
  },
  {
    text: "I was impressed with the quality of work of the maid who cleaned our hotel room. She was very attentive to detail and went out of her way to make the space look perfect. I would recommend her to all my friends and family!",
    name: "Susan Davis",
    img: people_2,
  },
];
