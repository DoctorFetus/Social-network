import React from "react"
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/redusers/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {
            const sendMessageClick = () => {
                const action = sendMessageCreator()
                store?.dispatch(action)
            }

            const onNewMessageChange = (newBody: string) => {
                const action = updateMessageBodyCreator(newBody)
                store?.dispatch(action)
            }

            if (!store) return
            const state = store.getState().dialogsPage

            return <Dialogs dialogsPage={state}
                            updateNewMessageBody={onNewMessageChange}
                            sendMessage={sendMessageClick}/>
        }
    }</StoreContext.Consumer>


}

export default DialogsContainer;