import React from "react"
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "user1"},
        {id: 2, name: "user2"},
        {id: 3, name: "user3"},
        {id: 4, name: "user4"},
        {id: 5, name: "user5"}
    ]

    let messagesData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is your nothing?"},
        {id: 2, message: "Not bad"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
              <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
              <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>


            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
            </div>
        </div>
    )
}

export default Dialogs;