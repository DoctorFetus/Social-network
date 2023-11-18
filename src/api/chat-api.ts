
let subscribes = {
    'message-received': [] as MessageReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[],
}

let ws: WebSocket | null = null

export const closeChannel = () =>  {
    setTimeout(createChannel, 1000)
}

export const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    console.log(subscribes)
    subscribes["message-received"].forEach(subscriber => subscriber(newMessages))
}

export const openHandler = () => {
    notifySubscribersAboutStatus('ready')
}

export const errorHandler = () => {
    notifySubscribersAboutStatus('error')
}

const cleanUp = () => {
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
    ws?.removeEventListener('close', closeChannel)
    notifySubscribersAboutStatus('pending')
    ws?.close()
}

export const createChannel = () => {
    cleanUp()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
    ws.addEventListener('close', closeChannel)
    ws.addEventListener('message', messageHandler)
}

export const notifySubscribersAboutStatus = (status: StatusType) => subscribes["status-changed"].forEach(subscriber => subscriber(status))

export const chatApi = {

    start() {
        createChannel()
    },

    stop() {

        ws?.removeEventListener('close', closeChannel)
        ws?.removeEventListener('message', messageHandler)
        subscribes['status-changed'] = []
        subscribes['message-received'] = []
    },

    subscribe(eventName: EventsNamesType, callback: any) {
        subscribes[eventName].push(callback)
    },

    unsubscribe(eventName: EventsNamesType, callback: any) {
        // @ts-ignore
        subscribes[eventName] = subscribes[eventName].filter(subscriber => subscriber !== callback)
    },
    send(message: string) {
        ws?.send(message)
    }
}


export type ChatMessageType =   {
    message: string
    photo: string
    userId: number
    userName: string,
    messageId: string
}

type MessageReceivedSubscriberType = (messages: ChatMessageType[]) => void

type StatusChangedSubscriberType = (status: StatusType) => void



export type StatusType = 'pending' | 'ready' | 'error'

type EventsNamesType = 'message-received' | 'status-changed'