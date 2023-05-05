import {ActionTypes, DialogsPageType} from "../store";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

function dialogsReducer(state: DialogsPageType, action: ActionTypes) {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 5,
                message: state.newMessageText,
                sender: "user"
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
}

export const sendMessageCreator = (): ActionTypes => (
    {type: ADD_MESSAGE})
export const updateMessageBodyCreator = (text: string): ActionTypes => (
    {type: UPDATE_NEW_MESSAGE_BODY, newMessageText: text})

export default dialogsReducer