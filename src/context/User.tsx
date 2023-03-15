import { createContext, PropsWithChildren, useContext, useState } from "react";

const UserContext = createContext<any>(null);

type value_type = {
    access: boolean,
    setAccess: (bool: boolean) => void,
}

export const UserProvider = ({ children }) => {
    const [access, setAccess] = useState<boolean>(false);
    const value = {
        access,
        setAccess
    }
    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);