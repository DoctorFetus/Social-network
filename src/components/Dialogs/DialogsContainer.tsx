import React from "react"
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/redusers/dialogs-reducer";
import {ActionsType, StateType} from "../../redux/redux-store";
import {Store} from "redux";
import Dialogs from "./Dialogs";

type DialogsContainerType = {
    store: Store<StateType, ActionsType>

}

const DialogsContainer: React.FC<DialogsContainerType> = ({store}) => {

    const state = store.getState().dialogsPage

    const sendMessageClick = () => {
        const action = sendMessageCreator()
        store.dispatch(action)
    }

    const onNewMessageChange = (newBody: string) => {
        const action = updateMessageBodyCreator(newBody)
        store.dispatch(action)
    }

    return <Dialogs dialogsPage={state}
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={sendMessageClick}/>
}

export default DialogsContainer;