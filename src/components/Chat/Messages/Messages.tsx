import {memo, useEffect, useRef, useState} from "react";
import {ChatMessageType} from "../../../api/chat-api";
import {useSelector} from "react-redux";
import {StoreType} from "../../../redux/store";
import Paper from "@mui/material/Paper";
import s from './Messages.module.css'
import Typography from "@mui/material/Typography";

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
        <Paper elevation={2} className={s.message}>
            <div className={s.profileInfo}>
            <img className={s.avatar} src={message.photo} alt="avatar"/>
            <Typography className={s.name}>{message.userName}:</Typography>
            </div>
            <Typography className={s.messageText}>{message.message}</Typography>
        </Paper>
    )
})