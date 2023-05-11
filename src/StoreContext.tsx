import React, {FC} from "react";
import {StoreType} from "./redux/redux-store";

const StoreContext = React.createContext<StoreType | null>(null)

export const Provider: FC<ProviderType> = (props) => (
    <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
    )

export type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

export default StoreContext