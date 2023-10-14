import { useUpdateSelectedTodoTask } from '@/hooks/use-task';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

const TaskListItemCheckbox = ({ id, completed }) => {
    const update = useUpdateSelectedTodoTask()

    const handleChange = event => {
        update(id, task => {
            task.completed = event.target.checked
        })
    }

    return (
        <Box
            sx={{
                position: 'absolute',
                left: '5px',
                top: '50%',
                transform: 'translateY(-50%)'
            }}
        >
            <Checkbox
                tabIndex={-1}
                checked={completed}
                onChange={handleChange}
            />
        </Box>
    )
}

export default TaskListItemCheckbox