import {chatApi, ChatMessageType, createChannel} from "../../api/chat-api";
import {Dispatch} from "redux";


const initialState = {
    messages: [] as ChatMessageType[]
}

const chatReducer = (state: typeof initialState = initialState, action: ChatActionType) => {
    switch (action.type) {
        case "MESSAGES-RECEIVED":
            return {...state, messages: [...action.payload.messages ]}
        default:
            return state

    }
}




type MessagesReceivedType = ReturnType<typeof messagesReceived>
export const messagesReceived = (messages: ChatMessageType[]) => {
    return {type: "MESSAGES-RECEIVED", payload: {messages}} as const
}


let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler =  (messages: ChatMessageType[]) => {
            dispatch(messagesReceived(messages))
        }
    }

    return _newMessageHandler
 }

export const startMessagesListening = () => async (dispatch: Dispatch) => {
    chatApi.start()
    chatApi.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessagesListening = () => async (dispatch: Dispatch) => {
    chatApi.stop()
    chatApi.unsubscribe(newMessageHandlerCreator(dispatch))
}
export const sendMessage = (message: string) => async () => {
     chatApi.send(message)
}


export type ChatActionType = MessagesReceivedType

export default chatReducer