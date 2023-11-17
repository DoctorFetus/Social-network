
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
    subscribes["message-received"].forEach(subscriber => subscriber(newMessages))
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeChannel)
    ws?.removeEventListener('message', messageHandler)
    notifySubscribersAboutStatus('pending')
    ws?.close()
}

export const createChannel = () => {
    cleanUp()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('close', closeChannel)
    ws.addEventListener('message', messageHandler)
    notifySubscribersAboutStatus('ready')
}

export const notifySubscribersAboutStatus = (status: StatusType) => subscribes["status-changed"].forEach(subscriber => subscriber(status))

export const chatApi = {

    start() {
        createChannel()
    },

    stop() {

        subscribes['message-received'] = []
        subscribes['status-changed'] = []
        ws?.removeEventListener('close', closeChannel)
        ws?.removeEventListener('message', messageHandler)
    },

    subscribe(eventName: EventsNamesType, callback: any) {
        subscribes[eventName].push(callback)
    },

    unsubscribe(eventName: EventsNamesType, callback: any) {
        // @ts-ignore
        subscribes = subscribes[eventName].filter(subscriber => subscriber !== callback)
    },
    send(message: string) {
        ws?.send(message)
    }
}


export type ChatMessageType =   {
    message: string
    photo: string
    userId: number
    userName: string
}

type MessageReceivedSubscriberType = (messages: ChatMessageType[]) => void

type StatusChangedSubscriberType = (status: StatusType) => void



export type StatusType = 'pending' | 'ready'

type EventsNamesType = 'message-received' | 'status-changed'