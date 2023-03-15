import { useEffect } from "react";
import { useContext, useState } from "react";
import { createContext, PropsWithChildren, useRef } from "react";

const HomeContext = createContext<any>(null);

type value_type = {
    handlePresentModal: () => void,
    bottomSheetModalRef: any,
    setZIndex: (el: boolean) => void,
    zIndex: boolean,
}

export const HomeProvider = ({ children }: PropsWithChildren) => {
    const bottomSheetModalRef = useRef(null);
    const [zIndex, setZIndex] = useState<boolean>(true);
    const handlePresentModal = () => {
        bottomSheetModalRef.current?.present();
        setZIndex(false);
    }
    const value: value_type = {
        handlePresentModal,
        bottomSheetModalRef,
        zIndex, 
        setZIndex
    }
    return (
        <HomeContext.Provider value={value}>
            { children }
        </HomeContext.Provider>
    )
}

export const useHome = () => useContext(HomeContext);