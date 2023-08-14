import { createContext, useContext, useState } from "react";

export  const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){

    const [ number, setNumber] = useState(10)
    const [isAuthenticated, setAuthenticated] = useState(false)

    // const valueToBeShared = {number, isAuthenticated, setAuthenticated}

    return(
        <AuthContext.Provider value={{number,isAuthenticated,setAuthenticated}}>
            {children}
       </AuthContext.Provider>
    )
    
}