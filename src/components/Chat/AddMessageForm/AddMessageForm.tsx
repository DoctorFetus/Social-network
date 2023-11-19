import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../../redux/store";
import {StatusType} from "../../../api/chat-api";
import {sendMessage} from "../../../redux/redusers/chat-reducer";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import s from './AddMessageForm.module.css'

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

    return <div className={s.wrapper}>
        <TextField variant={'outlined'} label={'Type your message here...'} style={{width: '80%'}}
                   onChange={(e) => setText(e.currentTarget.value)}/>
        <IconButton size={'large'} disabled={status !== 'ready' || !text} onClick={sendMessageHandler}
                    color={'primary'}><SendIcon/></IconButton>
    </div>
}