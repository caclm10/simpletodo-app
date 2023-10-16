import IconButton from '@mui/material/IconButton'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import DeleteAlertDialog from '../DeleteAlertDialog'
import useDisclosure from '@/hooks/use-disclosure'

const RemoveProfilePictureButton = () => {
    const alertDialog = useDisclosure()

    const handleConfirm = () => {
        alertDialog.close()
    }
    return (
        <>
            <DeleteAlertDialog
                title="Remove profile picture"
                content="Your profile picture will be removed."
                titleId="remove-profile-picture-title"
                contentId="remove-profile-picture-description"
                confirmText='Remove'
                isOpen={alertDialog.isOpen}
                onClose={alertDialog.close}
                onConfirm={handleConfirm}
            />

            <IconButton color="error" aria-label="remove picture" onClick={alertDialog.open}>
                <DeleteOutlinedIcon />
            </IconButton>
        </>
    )
}

export default RemoveProfilePictureButton