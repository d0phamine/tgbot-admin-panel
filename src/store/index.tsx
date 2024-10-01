import { createContext, useContext } from "react";
import { botStore } from "./botStore";

export const rootStoreContext = createContext({
    botStore: new botStore()
})

export const useStores = () => useContext(rootStoreContext)