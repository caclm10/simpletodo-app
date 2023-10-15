import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import DeleteTaskAlertDialog from './DeleteTaskAlertDialog';
import useDisclosure from '@/hooks/use-disclosure';

const TaskListItemDeleteButton = ({ id, content }) => {
    const alertDialog = useDisclosure()

    return (
        <>
            <DeleteTaskAlertDialog
                id={id}
                content={content}
                isOpen={alertDialog.isOpen}
                onClose={alertDialog.close}
            />

            <Box
                sx={{
                    position: 'absolute',
                    right: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                }}
            >
                <IconButton
                    color="error"
                    aria-label="delete task"
                    onClick={alertDialog.open}
                >
                    <DeleteIcon />
                </IconButton>
            </Box>
        </>
    )
}

export default TaskListItemDeleteButton