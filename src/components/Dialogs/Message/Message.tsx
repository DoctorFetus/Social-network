import React, {FC} from "react"
import s from "./Message.module.css"

type MessageType = {
    text: string
}

const Message: FC <MessageType> = (props) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
}

export default Message;