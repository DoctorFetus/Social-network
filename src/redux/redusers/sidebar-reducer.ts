import {FriendType} from "../../components/Navbar/Friends/Friend/Friend";

export type SidebarType = {
    friends: Array<FriendType>
}

const initialState: SidebarType = {
    friends: [
        {id: 1, name: "Sura", icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw"},
        {id: 2, name: "Asin", icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw"},
        {id: 3, name: "Gebu", icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw"}
    ]
}

function sidebarReducer(state=initialState, action: any) {
    return state
}

export default sidebarReducer