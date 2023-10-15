import Box from '@mui/material/Box';
import TaskListItemButton from './TaskListItemButton';
import TaskItemDeleteButton from './TaskItemDeleteButton';
import TaskItemCheckbox from './TaskItemCheckbox';

const TaskListItem = ({ id, content, completed }) => {
    return (
        <Box
            position="relative"
            bgcolor="background.paper"
            display="flex"
            alignItems="strecth"
            borderRadius={1}
            overflow="hidden"
        >

            <TaskListItemButton id={id} content={content} completed={completed} />

            <Box
                sx={{
                    position: 'absolute',
                    left: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                }}
            >
                <TaskItemCheckbox id={id} completed={completed} />
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    right: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                }}
            >
                <TaskItemDeleteButton id={id} content={content} />
            </Box>
        </Box>
    )
}

export default TaskListItem