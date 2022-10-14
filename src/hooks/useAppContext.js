import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useAppContext = () => {
    const appCtx = useContext(AppContext)
    return {...appCtx}
}
