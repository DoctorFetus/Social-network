import {AnyAction, Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {StoreType} from "../redux-store";

const initialState: AppReducerType = {
    initialized: false
}

type AppReducerType = {
    initialized: boolean
}

export const appReducer = (state=initialState, action: AppActionType) => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {...state, initialized: true}
        default:
            return state
    }
}

type AppActionType = SetInitializedType

type SetInitializedType = ReturnType<typeof setInitialized>
const setInitialized = () => {
    return {
        type: "INITIALIZED-SUCCESS",
    } as const
}

export const initializeApp = () => (dispatch: ThunkDispatch<StoreType, never, AnyAction>) => {
    dispatch(getAuthUserData())
        .then(() => {
            dispatch(setInitialized())
        })
}