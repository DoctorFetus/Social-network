import {DialogItemType} from "../../components/Dialogs/Dialog/DialogItem";
import {MessageType} from "../../components/Dialogs/Message/Message";

export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}

const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw", name: "Sura"},
        {id: 2, icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw", name: "Asin"},
        {id: 3, icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw", name: "Gebu"},
        {id: 4, icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw", name: "Nun"},
        {id: 5, icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw", name: "Seciro"}
    ],
    messages: [
        {id: 1, message: "Hi!", sender: "user"},
        {id: 2, message: "How is your nothing?", sender: "user"},
        {id: 3, message: "Not bad", sender: "friend"},
        {id: 4, message: "Wow! That is work!", sender: "user"}
    ],
    newMessageText: ""
}

function dialogsReducer(state = initialState, action: DialogsPageActionType): DialogsPageType {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage = {
                id: 5,
                message: state.newMessageText,
                sender: "user"
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
}


export type DialogsPageActionType = SendMessageCreatorType | UpdateMessageBodyCreatorType

type SendMessageCreatorType = ReturnType<typeof sendMessageCreator>
export const sendMessageCreator = () => {
    return {type: "ADD-MESSAGE"} as const
}


type UpdateMessageBodyCreatorType = ReturnType<typeof updateMessageBodyCreator>
export const updateMessageBodyCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        newMessageText: text
    } as const
}


export default dialogsReducer