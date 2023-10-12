import { createContext, useState } from "react";

export const UIContext = createContext({
    alertDialog: {
        title: '',
        body: '',
        isOpen: false,
        onAccept: () => { },
        onCancel: () => { }
    },
    setAlertDialog: () => { }
})

export const UIProvider = ({ children }) => {
    const [alertDialog, setAlertDialog] = useState({
        title: "",
        body: "",
        isOpen: false,
        onAccept: () => { },
        onCancel: () => { }
    })
    return (
        <UIContext.Provider value={{
            alertDialog,
            setAlertDialog,
        }}>
            {children}
        </UIContext.Provider>
    )
}