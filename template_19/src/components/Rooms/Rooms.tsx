import React, {FC} from 'react';
import s from './Rooms.module.scss';
import Room from "@/components/Rooms/Room";
import {IRoomProps, IvritVersionProps, TypeRoomsRender} from "@/types/types";
import classNames from "classnames";


import room from '@/public/RoomsImages/room.png';
import bathroom from '@/public/RoomsImages/bathroom.png';
import hallway from '@/public/RoomsImages/hallway.png';
import kitchen from '@/public/RoomsImages/kitchen.png';

const Rooms: FC<IvritVersionProps> = (props) => {
    const rooms: IRoomProps[] = [
        {
            'image': room,
            'roomName': 'room',
            'roomNameIvrit': 'חֶדֶר'
        },
        {
            'image': kitchen,
            'roomName': 'kitchen',
            'roomNameIvrit': 'מִטְבָּח'
        },
        {
            'image': bathroom,
            'roomName': 'bathroom',
            'roomNameIvrit': 'חדר אמבטיה'
        },
        {
            'image': hallway,
            'roomName': 'hallway',
            'roomNameIvrit': 'מִסדְרוֹן'
        }
    ]

    const roomsRender: TypeRoomsRender = (roomsData) => {
        return roomsData.map((el, id) => <Room key={id} roomName={props.langIvrit ? el.roomNameIvrit! : el.roomName}
                                               image={el.image}/>)
    }

    let componentClassName = classNames({
        [s.rooms as string]: true,
        [s.ivrit_version as string]: props.langIvrit
    })

    return (
        <div className={componentClassName}>
            <div className={s.content}>
                <div className={s.carousel_layout}>
                    <div className={s.carousel}>
                        {roomsRender(rooms)}
                    </div>
                    <div className={s.carousel}>
                        {roomsRender(rooms)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rooms;