import {Dispatch} from "redux";
import {authAPI} from "../../api/api";

export type AuthType = {
    id: number | null,
    email: string | null,
    login: string | null
    isAuth: boolean
}

const initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state=initialState, action: SetUserDataType): AuthType => {
   switch (action.type) {
       case "SET_USER_DATA":
           return {
               ...state,
               ...action.payload,
               isAuth: true
           }
       default:
           return state
   }
}


type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (id: number, email: string, login: string) => {
    return {
        type: "SET_USER_DATA",
        payload: {id, email, login}
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(response => {
            console.log(response)
            if (!response.resultCode) {
                const {id, email, login} = response.data
                dispatch(setUserData(id, email, login))
            }
        })
}