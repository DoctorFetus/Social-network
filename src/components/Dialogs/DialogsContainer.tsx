import React from "react"
import {DialogsPageType, sendMessage} from "../../redux/redusers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../redux/store";
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapStateToPropsType =  DialogsPageType


type mapDispatchToPropsType = {
    sendMessage: (newMessageText: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StoreType): mapStateToPropsType => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages ,
})



export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs);