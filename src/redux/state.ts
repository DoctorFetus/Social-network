let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likeCounter: 15},
            {id: 2, message: "I am dead inside", likeCounter: 25}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw", name: "Sura"},
            {id: 2, icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw", name: "Asin"},
            {id: 3, icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw", name: "Gebu"},
            {id: 4, icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw", name: "Nun"},
            {id: 5, icon: "https://opis-cdn.tinkoffjournal.ru/mercury/359e2657.zw", name: "Seciro"}
        ],
        messages: [
            {id: 1, message: "Hi!", sender: "user"},
            {id: 2, message: "How is your nothing?", sender: "user"},
            {id: 3, message: "Not bad", sender: "friend"},
            {id: 4, message: "Wow! That is work!", sender: "user"}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: "Sura", icon:"https://pikuco.ru/upload/test_stable/96d/96d01aba12f9a99d9c0362b263d03969.jpg"},
            {id: 2, name: "Asin", icon:"https://pikuco.ru/upload/test_stable/96d/96d01aba12f9a99d9c0362b263d03969.jpg"},
            {id: 3, name: "Gebu", icon:"https://pikuco.ru/upload/test_stable/96d/96d01aba12f9a99d9c0362b263d03969.jpg"}
        ]
    }


}

export default state