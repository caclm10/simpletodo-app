import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteAlertDialog = ({
    title,
    content,
    titleId,
    contentId,
    isOpen,
    onClose,
    onConfirm
}) => {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            aria-labelledby={titleId}
            aria-describedby={contentId}
        >
            <DialogTitle id={titleId}>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id={contentId}>
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="error" onClick={onConfirm}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteAlertDialog