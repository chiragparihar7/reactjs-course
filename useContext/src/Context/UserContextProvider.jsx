import React, { useState } from "react";
import UserContext from "./UserContext";


export const UserContext = React.createContext()

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;