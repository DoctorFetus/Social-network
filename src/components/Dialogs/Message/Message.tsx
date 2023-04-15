import React, {FC} from "react"
import s from "./Message.module.css"

export type MessageType = {
    id: number
    message: string
    sender: string
}

const Message: FC <MessageType> = (props) => {

    const sender = props.sender === "user" ? s.user : s.friend
    const senderPosition = props.sender === "user" ? s.userPosition : s.friendPosition

    return (
        <div className={`${s.message} ${senderPosition}`}>
            <div className={sender}>
                {props.message}
            </div>
        </div>
    )
}

export default Message;