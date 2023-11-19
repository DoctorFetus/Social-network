import {useEffect} from "react";
import {StatusType} from "../../api/chat-api";
import {useDispatch, useSelector} from "react-redux";
import {startMessagesListening, stopMessagesListening} from "../../redux/redusers/chat-reducer";
import {StoreType} from "../../redux/store";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";
import {Messages} from "./Messages/Messages";


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


