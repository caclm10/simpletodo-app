import { useUI } from '@/hooks/ui.hook'
import Button from './Button'
import Modal from './Modal'

const AlertDialog = () => {
    const { alertDialog, setAlertDialog } = useUI()

    const cancel = () => {
        setAlertDialog(alertDialog => ({
            ...alertDialog,
            isOpen: false,
            onCancel: () => { },
            onAccept: () => { }
        }))
        alertDialog.onCancel()
    }

    const accept = () => {
        setAlertDialog(alertDialog => ({
            ...alertDialog,
            isOpen: false,
            onCancel: () => { },
            onAccept: () => { }
        }))
        alertDialog.onAccept()
    }

    return (
        <Modal isAppear isCenter isOpen={alertDialog.isOpen} onClose={cancel}>
            <Modal.Header title={alertDialog.title} />
            <Modal.Body>
                <p>{alertDialog.body}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="ghost" color="neutral" onClick={cancel}>Cancel</Button>
                <Button variant="ghost" color="danger" onClick={accept}>Continue</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AlertDialog