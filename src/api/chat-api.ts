
type SubscriberType = (messages: ChatMessageType[]) => void



let subscribes = [] as SubscriberType[]

let ws: WebSocket | null = null

export const closeChannel = () =>  {
    setTimeout(createChannel, 1000)
}

export const createChannel = () => {

    ws?.removeEventListener('close', closeChannel)
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('close', closeChannel)
    ws.addEventListener('message', messageHandler)
}

export const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribes.forEach(subscriber => subscriber(newMessages))
}


export const chatApi = {

    start() {
        createChannel()
    },

    stop() {
        ws?.close()
        subscribes = []
        ws?.removeEventListener('close', closeChannel)
        ws?.removeEventListener('message', messageHandler)
    },

    subscribe(callback: SubscriberType ) {
        subscribes.push(callback)
    },

    unsubscribe(callback: SubscriberType) {
        subscribes = subscribes.filter(subscriber => subscriber !== callback)
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