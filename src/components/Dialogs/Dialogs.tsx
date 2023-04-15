import React from "react"
import s from "./Dialogs.module.css"
import DialogItem, {DialogItemType} from "./Dialog/DialogItem";
import Message, {MessageType} from "./Message/Message";

type DialogsType = {
    state: {
        dialogs: Array<DialogItemType>,
        messages: Array<MessageType>
    }
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem icon={d.icon} name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message sender={m.sender} message={m.message} id={m.id}/>)

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