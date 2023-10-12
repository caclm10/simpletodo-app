import { useCallback, useContext } from "react";
import { UIContext } from "@/providers/ui.provider";

export const useUI = () => useContext(UIContext)

export const useAlertDialog = () => {
    const { setAlertDialog } = useUI()


    const open = useCallback(({
        title = "",
        body = "",
        onAccept = () => { },
        onCancel = () => { },
    } = {}) => {
        setAlertDialog({
            title,
            body,
            isOpen: true,
            onCancel,
            onAccept
        })
    }, [setAlertDialog])

    const close = useCallback(() => {
        setAlertDialog(alertDialog => ({
            ...alertDialog,
            isOpen: false,
            onAccept: () => { },
            onCancel: () => { }
        }))
    }, [setAlertDialog])

    return {
        open,
        close
    }
}