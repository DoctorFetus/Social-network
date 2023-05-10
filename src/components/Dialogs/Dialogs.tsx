import React, {ChangeEvent} from "react"
import s from "./Dialogs.module.css"
import DialogItem, {DialogItemType} from "./Dialog/DialogItem";
import Message, {MessageType} from "./Message/Message";

type DialogsType = {
    dialogsPage: {
        dialogs: Array<DialogItemType>,
        messages: Array<MessageType>
        newMessageText: string
    },
    updateNewMessageBody: (newBody: string) => void,
    sendMessage: () => void

}

const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem icon={d.icon} name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message sender={m.sender} message={m.message}
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
                              value={props.dialogsPage.newMessageText}
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