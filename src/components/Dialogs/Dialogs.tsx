import React from "react"
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
            <Dialog name="user1" id="1"/>
            <Dialog name="user2" id="2"/>
            <Dialog name="user3" id="3"/>
            <Dialog name="user4" id="4"/>
            <Dialog name="user5" id="5"/>

            </div>
            <div className={s.messages}>
                <Message text="Hi!"/>
                <Message text="How is your nothing?"/>
                <Message text="Not bad"/>
            </div>
        </div>
    )
}

export default Dialogs;