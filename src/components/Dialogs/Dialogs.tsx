import React, {ChangeEvent} from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogElements = props.dialogs.map(d => <DialogItem key={d.id} icon={d.icon} name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} sender={m.sender} message={m.message}
                                                                        id={m.id}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    const sendMessage = () => {
        props.sendMessage()
    }

    const changeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
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
                <div className={s.sender}>
                    <textarea ref={newMessageElement}
                              className={s.message_area}
                              placeholder={"Type message..."}
                              value={props.newMessageText}
                              onChange={changeMessageText}
                    />
                    <button
                        onClick={sendMessage}
                        className={s.btn_send}>Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;