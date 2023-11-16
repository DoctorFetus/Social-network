import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";

export type ChatMessageType =   {
    message: string
    photo: string
    userId: number
    userName: string
}



export const Chat = () => {

    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)


    useEffect(() => {

        let ws: WebSocket
        const closeChannel = () =>  {
                setTimeout(createChannel, 1000)
        }

        const createChannel = () => {

            ws?.removeEventListener('close', closeChannel)
            ws?.close()
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
                ws.addEventListener('close', closeChannel)
                setWsChannel(ws)
        }
        createChannel()

        return () => {
            ws.removeEventListener('close', closeChannel)
            ws.close()
        }

    }, []);

    return <div>
        <Messages wsChannel={wsChannel} />
        <AddMessageForm wsChannel={wsChannel}/>
    </div>
}

export const Messages = ({wsChannel}: {wsChannel: WebSocket | null}) => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])



    useEffect(() => {

        const messageHandler = (e: MessageEvent) => {
            setMessages((prevState) => [...prevState, ...JSON.parse(e.data)])
        }

        wsChannel?.addEventListener('message', messageHandler)

        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
        }

    }, [wsChannel]);

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

export const AddMessageForm = ({wsChannel}: {wsChannel: WebSocket | null}) => {


    const [text, setText ] = useState('')
    const [readyStatus, setReadyStatus ] = useState<'pending' | 'ready'>("pending")


    useEffect(() => {

        const openHandler = () => {
            setReadyStatus("ready")
        }
        wsChannel?.addEventListener('open', openHandler)

        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel]);

    const sendMessage = () => {

        if (!text) {
            return
        }

        wsChannel?.send(text)
    }

    return <div>
        <TextField onChange={(e) => setText(e.currentTarget.value)}/>
        <Button disabled={readyStatus === 'pending'} onClick={sendMessage} variant={'contained'}>Send</Button>
    </div>
}


