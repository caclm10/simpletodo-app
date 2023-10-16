import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import useDisclosure from '@/hooks/use-disclosure';
import DeleteStepAlertDialog from './DeleteStepAlertDialog';

const StepItemDeleteButton = ({ taskId, id, content }) => {
    const alertDialog = useDisclosure()

    return (
        <>
            <DeleteStepAlertDialog
                taskId={taskId}
                id={id}
                content={content}
                isOpen={alertDialog.isOpen}
                onClose={alertDialog.close}
            />

            <IconButton
                color="error"
                size="small"
                aria-label="delete task step"
                onClick={alertDialog.open}
            >
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </>
    )
}

export default StepItemDeleteButton