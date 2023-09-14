import { createContext, ReactNode, useContext, useState } from "react";

interface DrawerData{
    isDrawerOpen: boolean;
    handleOpenDrawer: () => void;
    handleCloseDrawer: () => void;
}

interface DrawerProps {
    children: ReactNode;
}

const DrawerContext = createContext({} as DrawerData);

export function DrawerProvider({ children }: DrawerProps){
    const [ isDrawerOpen, setDrawerOpen ] = useState(false);

    function handleCloseDrawer() {
        setDrawerOpen(false);
    }

    function handleOpenDrawer(){
        setDrawerOpen(true);
    }

    return(
        <DrawerContext.Provider
            value={{
                isDrawerOpen,
                handleOpenDrawer,
                handleCloseDrawer
            }}>
            {children}
        </DrawerContext.Provider>
    );
}

export const useDrawer = () => useContext(DrawerContext);