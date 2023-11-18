import {chatApi, ChatMessageType, StatusType} from "../../api/chat-api";
import {Dispatch} from "redux";
import {v1} from "uuid";


const initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
}

const chatReducer = (state: typeof initialState = initialState, action: ChatActionType) => {
    switch (action.type) {
        case "MESSAGES-RECEIVED":
            return {...state, messages: [...state.messages, ...action.payload.messages.map(message => ({...message, messageId: v1()}))]}
        case "STATUS-CHANGED":
            return {...state, status: action.payload.status}
        default:
            return state

    }
}




type MessagesReceivedType = ReturnType<typeof messagesReceived>
export const messagesReceived = (messages: ChatMessageType[]) => {
    return {type: "MESSAGES-RECEIVED", payload: {messages}} as const
}

type StatusChangedType = ReturnType<typeof statusChanged>
export const statusChanged= (status: StatusType) => {
    return {type: "STATUS-CHANGED", payload: {status}} as const
}


let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages: ChatMessageType[]) => {
            debugger
            dispatch(messagesReceived(messages))
        }
    }

    return _newMessageHandler
 }

let _statusChangedHandler: ((messages: StatusType) => void) | null = null
const statusChangedCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler =  (messages: StatusType) => {
            dispatch(statusChanged(messages))
        }
    }

    return _statusChangedHandler
}

export const startMessagesListening = () => async (dispatch: Dispatch) => {
    chatApi.subscribe('message-received', newMessageHandlerCreator(dispatch))
    chatApi.subscribe('status-changed',  statusChangedCreator(dispatch))
    chatApi.start()
}

export const stopMessagesListening = () => async (dispatch: Dispatch) => {
    chatApi.unsubscribe('message-received',  newMessageHandlerCreator(dispatch))
    chatApi.unsubscribe('status-changed',  statusChangedCreator(dispatch))
    chatApi.stop()
}
export const sendMessage = (message: string) => async () => {
     chatApi.send(message)
}


export type ChatActionType = MessagesReceivedType | StatusChangedType
export default chatReducer