import React, {FC} from "react"
import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    name: string
    id: number
    icon: string
}

const DialogItem: FC <DialogItemType> = (props) => {

    let path = "/dialogs/" + props.id

    return (
            <div className={s.dialogItem}>
                <img className={s.icon} src={props.icon} alt="icon"/>
                <NavLink className={s.friendLink} to={path}>{props.name}</NavLink>
            </div>
    )
}

export default DialogItem;