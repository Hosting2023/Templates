import React, {FC} from 'react';
import s from './InfoModal.module.scss'
import Image from "next/image";
import classNames from "classnames";
import {IInfoModalProps} from "@/types/types";

const InfoModal: FC<IInfoModalProps> = (props) => {
    const componentClassName = classNames(s.info_modal_layout, {
        [s.show as string]: props.modalIsOpen,
        [s.ivrit_version as string]: props.langIvrit
    })

    const closeModal = () => {
        props.setModalIsOpen(false)
    }

    const textRenderFunc = () => {
        return props.modalTextInfo.text.map((el, id) => <p key={id} className={s.text}>{el}</p>)
    }

    return (
        <div className={componentClassName}>
            <div className={s.content}>
                <div className={s.display}>
                    <Image src={props.modalTextInfo.imgUrl} alt={'About me image'} width={686} height={686}/>
                    <div className={s.text_part}>
                        <h2 className={s.title}>{props.modalTextInfo.title}</h2>
                        {textRenderFunc()}
                    </div>
                </div>
                <div className={s.button_content}>
                    <button className={s.button_close} onClick={closeModal}>{props.langIvrit ? 'סגור' : 'CLOSE'}</button>
                </div>
            </div>
        </div>
    );
};

export default InfoModal;