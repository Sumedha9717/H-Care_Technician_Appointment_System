import { createContext } from "react";

export const TechnicianContext = createContext()

const TechnicianContextProvider = (props) => {

    const value = {

    }

    return (
        <TechnicianContext.Provider value={value}>
            {props.children}
        </TechnicianContext.Provider>
    )

}

export default TechnicianContextProvider