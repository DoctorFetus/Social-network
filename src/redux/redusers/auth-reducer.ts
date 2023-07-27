import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {FormDataType} from "../../components/Login/LoginForm/LoginForm";
import {ThunkDispatch} from "redux-thunk";
import {StoreType} from "../store";
import {stopSubmit} from "redux-form";

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


export const authReducer = (state = initialState, action: SetUserDataType): AuthType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}


type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "SET_USER_DATA",
        payload: {id, email, login, isAuth}
    } as const
}

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const response = await authAPI.authMe()
    if (!response.resultCode) {
        const {id, email, login} = response.data
        dispatch(setUserData(id, email, login, true))
    }
}

export const loginIn = (formData: FormDataType) => async (dispatch: ThunkDispatch<StoreType, never, AnyAction>) => {
    const response = await authAPI.loginIn(formData)
    if (!response.resultCode) {
        await dispatch(getAuthUserData())
    } else {
        const errorMessage = response.messages.length > 0 ? response.messages[0] : "Unknown error..."
        dispatch(stopSubmit("login", {_error: errorMessage}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    const response = await authAPI.logout()
    if (!response.resultCode) {
        dispatch(setUserData(null, null, null, false))
    }
}