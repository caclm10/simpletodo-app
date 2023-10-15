import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import useDisclosure from '@/hooks/use-disclosure';
import DeleteTaskAlertDialog from './DeleteTaskAlertDialog';

const TaskItemDeleteButton = ({ id, content }) => {
    const alertDialog = useDisclosure()

    return (
        <>
            <DeleteTaskAlertDialog
                id={id}
                content={content}
                isOpen={alertDialog.isOpen}
                onClose={alertDialog.close}
            />

            <IconButton
                color="error"
                aria-label="delete task"
                onClick={alertDialog.open}
            >
                <DeleteIcon />
            </IconButton>
        </>
    )
}

export default TaskItemDeleteButton