import React, {Dispatch, SetStateAction} from "react";
import {StaticImageData} from "next/image";

export interface IvritVersionProps {
	langIvrit: boolean
}



export interface IHeaderCardProps {
	btnText: string
}



export interface IRoomProps {
	image: StaticImageData,
	roomName: string,
	roomNameIvrit?: string
}

export type TypeRoomsRender = (roomsData: IRoomProps[]) => React.ReactNode



export interface IAdvantagesCardProps {
	image: StaticImageData,
	title: string,
	text: string,
	langIvrit?: boolean
}

export type TypeAdvantagesCardsRender = (advantagesCardData: IAdvantagesCardProps[]) => React.ReactNode



export const enum cardType {
	cleanGasStove = 'cleanGasStove',
	cleanTheFloors = 'cleanTheFloors'
}

export interface IWorkDescriptionCardProps{
	image: StaticImageData,
	title: string,
	text: string,
	openModalFunc: (cardType: cardType) => void,
	cardType: cardType
}

export type TypeWorkDescriptionCardsRender = (workDescriptionCardsData: IWorkDescriptionCardProps[]) => React.ReactNode



export interface IScheduleFiltersCardsProps {
	text: string,
	type: string,
	buttons: IScheduleFiltersCardsButtonsInfo[],
	stateChoose: string | null,
	stateChooseChanger: Dispatch<SetStateAction<string | null>> | IScheduleFiltersAllergy,
	cleaningCardVisibility?: boolean
}

type IScheduleFiltersAllergy = (allergyTypeChoose: string | null) => void

export interface IScheduleFiltersCardsButtonsInfo {
	type: string,
	text: string
}



export interface IFaqCardProps {
	question: string,
	answer: string,
	langIvrit?: boolean
}

export type TypeFaqCardsRender = (faqCardData: IFaqCardProps[]) => React.ReactNode



export interface IInfoModalTextProps {
	title: string,
	text: string[],
	imgUrl: string
}

export interface IInfoModalProps{
	modalIsOpen: boolean,
	setModalIsOpen: Dispatch<SetStateAction<boolean>>,
	modalTextInfo: IInfoModalTextProps,
	langIvrit: boolean
}



export interface IFooterCard {
	image: StaticImageData,
	btnText: string,
}



export interface IBurgerMenuButtonProps {
	text: string,
	url: string
}