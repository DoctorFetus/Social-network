import React from "react"
import {DialogsPageType, sendMessageCreator, updateMessageBodyCreator} from "../../redux/redusers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type mapStateToPropsType =  DialogsPageType


type mapDispatchToPropsType = {
    updateNewMessageBody: (newBoy:string) => void
    sendMessage: () => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages ,
    newMessageText: state.dialogsPage.newMessageText
})

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (newBody: string) => {
            const action = updateMessageBodyCreator(newBody)
            dispatch(action)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;