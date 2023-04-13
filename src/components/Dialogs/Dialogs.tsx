import React from "react"
import s from "./Dialogs.module.css"
import DialogItem, {DialogType} from "./Dialog/DialogItem";
import Message, {MessageType} from "./Message/Message";

export type DialogsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;