import { createContext } from "react";
import { technicians } from '../assets/assets_frontend/assets';

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = 'Rs'

    const value = {
        technicians,
        currencySymbol
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}
export default AppContextProvider;