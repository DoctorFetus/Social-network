import {DialogItemType} from "../../components/Dialogs/Dialog/DialogItem";
import {MessageType} from "../../components/Dialogs/Message/Message";

export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
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
}



function dialogsReducer(state = initialState, action: DialogsPageActionType) {
    switch (action.type) {
        case "SEND-MESSAGE":
            const newMessage = {
                id: 5,
                message: action.payload.newMessage,
                sender: "user"
            }
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}

type SendMessageCreatorType = ReturnType<typeof sendMessage>
export const sendMessage = (newMessage: string) => {
    return {type: "SEND-MESSAGE", payload: {newMessage}} as const
}

export type DialogsPageActionType = SendMessageCreatorType

export default dialogsReducer