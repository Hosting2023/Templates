import { ReactNode } from "react";

export type TranslateType = {
    [key: string]: string;
};

export type BenefitItemProps = {
    title: string;
};

export type ServiceItemProps = {
    imageSrc: string;
    title: string;
    text: string;
    cleaning?: string;
};

export type FilterColumnProps = {
    title: string;
    items: TranslateType;
    selected: string | null;
    onItemClick: (value: string) => void;
    disabledItems?: {
        item: string;
        disabled: boolean;
    }[];
};

export type CalendarProps = {
    isBlurred: boolean;
    setSelectedCleaning: (value: string | null) => void;
};

export type FaqItemProps = { q?: string; q1?: string; q2?: string; a: string };

export type AuthModalProps = {
    onClose: () => void;
    onClick?: () => void;
    title?: string;
    auth?: TranslateType;
};

export type ImageType = {
    src: string;
    width: number;
    height: number;
};

export type SliderItemProps = {
    image: ImageType;
    name: string;
    review: string;
};
