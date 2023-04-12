import React, {FC} from "react"
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

type DialogType = {
    name: string
    id: number
}

const Dialog: FC <DialogType> = (props) => {

    let path = "/dialogs/" + props.id

    return (
            <div className={s.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
    )
}

export default Dialog;