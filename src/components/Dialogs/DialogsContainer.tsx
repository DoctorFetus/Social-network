import React from "react"
import {DialogsPageType, sendMessageCreator, updateMessageBodyCreator} from "../../redux/redusers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapStateToPropsType =  DialogsPageType


type mapDispatchToPropsType = {
    updateNewMessageBody: (newBoy:string) => void
    sendMessage: () => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StoreType): mapStateToPropsType => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages ,
    newMessageText: state.dialogsPage.newMessageText,
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);