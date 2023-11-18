import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {memo, useEffect, useRef, useState} from "react";
import {ChatMessageType, StatusType} from "../../api/chat-api";
import {useDispatch, useSelector} from "react-redux";
import {
    sendMessage,
    startMessagesListening,
    stopMessagesListening
} from "../../redux/redusers/chat-reducer";
import {StoreType} from "../../redux/store";


export const Chat = () => {

    const status = useSelector<StoreType, StatusType>(state => state.chat.status)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, []);


    return <div>
        {status === 'error'
            ? <div>Some error. Please, refresh page</div>

            : <>
                <Messages/>
                <AddMessageForm/>
            </>
        }
    </div>
}

export const Messages = () => {

    const lastMessageRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false)

    const messages = useSelector<StoreType, ChatMessageType[]>(state => state.chat.messages)

    useEffect(() => {
        lastMessageRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [messages]);

    const onScrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget
         if (Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 100) {
             setIsAutoScroll(true)
         }

         setIsAutoScroll(false)
    }

    return <div style={{height: '400px', overflowY: 'auto'}} onScroll={onScrollHandler}>
        {messages.map((message) => <Message message={message} key={message.messageId}/>)}
        <div ref={lastMessageRef}></div>
    </div>

}


const Message = memo(({message}: { message: ChatMessageType }) => {

    return (
        <div>
            <img src={message.photo} alt="avatar"/>
            <span>{message.userName}</span>
            <div>{message.message}</div>
        </div>
    )
})

export const AddMessageForm = () => {

    const [text, setText] = useState('')

    const status = useSelector<StoreType, StatusType>(state => state.chat.status)

    const dispatch = useDispatch()

    const sendMessageHandler = () => {

        if (!text) {
            return
        }


        dispatch(sendMessage(text))
        setText("")
    }

    return <div>
        <TextField onChange={(e) => setText(e.currentTarget.value)}/>
        <Button disabled={status !== 'ready'} onClick={sendMessageHandler} variant={'contained'}>Send</Button>
    </div>
}


