import {AnyAction, Dispatch} from "redux";
import {authApi, securityApi} from "../../api/api";
import {FormDataType} from "../../components/Login/LoginForm/LoginForm";
import {ThunkDispatch} from "redux-thunk";
import {StoreType} from "../store";
import {stopSubmit} from "redux-form";

export type AuthType = {
    id: number | null,
    email: string | null,
    login: string | null
    isAuth: boolean,
    captchaUrl: null | string
}

const initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}


export const authReducer = (state = initialState, action: authReducerActionsType): AuthType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            }
        case "SET_CAPTCHA_URL":
            
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

type authReducerActionsType = SetCaptchaUrlType | SetUserDataType

type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "SET_USER_DATA",
        payload: {id, email, login, isAuth}
    } as const
}

type SetCaptchaUrlType = ReturnType<typeof setCaptcha>
const setCaptcha = (captchaUrl: string) => {
    return {
        type: "SET_CAPTCHA_URL",
        payload: {captchaUrl}
    } as const
}

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const response = await authApi.authMe()
    if (!response.resultCode) {
        const {id, email, login} = response.data
        dispatch(setUserData(id, email, login, true))
    }
}

export const loginIn = (formData: FormDataType) => async (dispatch: ThunkDispatch<StoreType, never, AnyAction>) => {
    const response = await authApi.loginIn(formData)
    if (!response.resultCode) {
        await dispatch(getAuthUserData())
    } else {
        
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        const errorMessage = response.messages.length > 0 ? response.messages[0] : "Unknown error..."
        dispatch(stopSubmit("login", {_error: errorMessage}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    const response = await authApi.logout()
    if (!response.resultCode) {
        dispatch(setUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const response = await securityApi.getCaptcha()
    dispatch(setCaptcha(response.url))
}