import { useUpdateSelectedTodoTask } from '@/hooks/use-task';
import Checkbox from '@mui/material/Checkbox';

const TaskItemCheckbox = ({ id, completed }) => {
    const update = useUpdateSelectedTodoTask()

    const handleChange = event => {
        update(id, task => {
            task.completed = event.target.checked
        })
    }

    return (
        <Checkbox
            tabIndex={-1}
            checked={completed || false}
            onChange={handleChange}
        />
    )
}

export default TaskItemCheckbox