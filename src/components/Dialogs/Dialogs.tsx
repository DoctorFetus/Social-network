import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import AddMessageForm from "./Dialog/AddMessageForm/AddMessageForm";


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogElements = props.dialogs.map(d => <DialogItem key={d.id} icon={d.icon} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} sender={m.sender} message={m.message}
                                                                        id={m.id}/>)

    const sendMessage = (formData: {newMessageBody: string}) => {
        props.sendMessage(formData.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <AddMessageForm onSubmit={sendMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;