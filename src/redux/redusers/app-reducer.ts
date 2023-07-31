import {AnyAction, Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {StoreType} from "../store";

const initialState: AppReducerType = {
    initialized: false
}

type AppReducerType = {
    initialized: boolean
}

export const appReducer = (state = initialState, action: AppActionType) => {
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

export const initializeApp = () => async (dispatch: ThunkDispatch<StoreType, never, AnyAction>) => {
    try {
        await dispatch(getAuthUserData())
        dispatch(setInitialized())
    }
    catch(e) {
        console.log(e)
    }

}