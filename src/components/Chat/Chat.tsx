import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import {ChatMessageType} from "../../api/chat-api";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/redusers/chat-reducer";
import {StoreType} from "../../redux/store";


export const Chat = () => {

    const dispatch =  useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, []);


    return <div>
        <Messages />
        <AddMessageForm />
    </div>
}

export const Messages = () => {

    const messages = useSelector<StoreType, ChatMessageType[]>(state => state.chat.messages)

    return <div style={{height: '400px', overflowY: 'auto'}}>
        {messages.map((message, index) => <Message message={message} key={index} />)}
    </div>

}



const Message = ({message}: {message: ChatMessageType}) => {

    return (
        <div>
            <img src={message.photo} alt="avatar"/>
            <span>{message.userName}</span>
            <div>{message.message}</div>
        </div>
    )
}

export const AddMessageForm = () => {

    const [text, setText ] = useState('')

    const dispatch =  useDispatch()

    const sendMessageHandler = () => {

        if (!text) {
            return
        }

        dispatch(sendMessage(text))
        setText("")
    }

    return <div>
        <TextField onChange={(e) => setText(e.currentTarget.value)}/>
        <Button onClick={sendMessageHandler} variant={'contained'}>Send</Button>
    </div>
}


