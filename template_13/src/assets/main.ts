import Calendar from "@/public/Calendar-1.svg";
import Security from "@/public/Security.svg";

export interface Item {
  id: number;
  title: string;
}

export const Allergys: Item[] = [
  {
    id: 1,
    title: "None",
  },
  {
    id: 2,
    title: "Cat",
  },
  {
    id: 3,
    title: "Dog",
  },
];

export const visitfreq: Item[] = [
  {
    id: 1,
    title: "One-time",
  },
  {
    id: 2,
    title: "Twice a week",
  },
  {
    id: 3,
    title: "Every week",
  },
];

export const TypeClinings: Item[] = [
  {
    id: 1,
    title: "Regular cleaning",
  },
  {
    id: 2,
    title: "Window cleaning",
  },
  {
    id: 3,
    title: "After repairing",
  },
  {
    id: 4,
    title: "After relocation",
  },
];

export interface FilterChoice {
  text: string;
}

export const filterChoices: FilterChoice[] = [
  {
    text: "Select the desired parameters for the filter, such as date, time, cleaning frequency, etc.",
  },
  {
    text: "Select the desired parameters for the filter, such as date, time, cleaning frequency, etc.",
  },
  {
    text: 'Click the "Apply" button to apply the selected filters.',
  },
  {
    text: 'Choose a convenient time and day, book your appointment by confirming with the "Order" button.',
  },
];

export interface ContentBlock {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}

export const contentBlocks: ContentBlock[] = [
  {
    imgSrc: Calendar,
    altText: "Calendar",
    title: "Convenient schedule",
    description:
      "Our convenient schedule allows you to choose a convenient time and day. You can order cleaning at a convenient time for you, without violating your schedule and plans. I am always ready to adapt to your schedule and provide cleaning services at a convenient time for you.",
  },
  {
    imgSrc: Security,
    altText: "Security",
    title: "Quality assurance",
    description:
      "Quality is our top priority. I don't take shortcuts and use only the finest materials and equipment to ensure the highest level of cleanliness and order in your space. I guarantee that you will be satisfied with the result of my work and will return again and again.",
  },
];
