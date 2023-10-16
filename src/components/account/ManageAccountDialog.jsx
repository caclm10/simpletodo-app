import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import UpdateProfileForm from './UpdateProfileForm';
import NewPasswordForm from './NewPasswordForm';


const ManageAccountDialog = ({ isOpen, onClose }) => {


  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={isOpen}
      onClose={onClose}
    >
      <DialogTitle>Manage Account</DialogTitle>
      <DialogContent>
        <UpdateProfileForm />

        <NewPasswordForm />
      </DialogContent>

    </Dialog>
  )
}

export default ManageAccountDialog