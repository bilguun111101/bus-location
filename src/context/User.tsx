import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

const UserContext = createContext<any>(null);

type value_type = {
    access: boolean,
    setAccess: (bool: boolean) => void,
    user: any,
    userUid: string,
    locationAccess: boolean,
    setLocationAccess: (bool: boolean) => void,
    logout: () => void,
}

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<any>();
    const [userUid, setUserUid] = useState<string>("");
    const [access, setAccess] = useState<boolean>(false);
    const [locationAccess, setLocationAccess] = useState(false);
    useEffect(() => {
        const userInformation = auth().onAuthStateChanged((snap) => {
            if(!snap) return;
            setAccess(true);
            setUserUid(snap.uid);
        })
        return userInformation;
    }, [])
    useEffect(() => {
        (async() => {
            if(!userUid && !access) return
            try {
                const save = await firestore().collection('users').doc(userUid).get();
                setUser(save.data());
            } catch (error) { console.log(error) }
        })()
    }, [userUid, access])
    const logout = async() => {
        try {
            await auth().signOut();
        } catch (error) { console.log(error) }
    }
    const value: value_type = {
        access,
        setAccess,
        user,
        logout,
        userUid,
        locationAccess,
        setLocationAccess,
    }
    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);