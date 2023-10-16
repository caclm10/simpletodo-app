import Checkbox from '@mui/material/Checkbox';
import { useUpdateSelectedTodoTask } from '@/hooks/use-task';

const StepItemCheckbox = ({ taskId, id, completed }) => {
    const update = useUpdateSelectedTodoTask()

    const handleChange = event => {
        update(taskId, task => {
            const index = task.steps.findIndex(step => step.id === id)
            task.steps[index].completed = event.target.checked
        })
    }

    return (
        <Checkbox
            tabIndex={-1}
            checked={completed || false}
            size="small"
            onChange={handleChange}
        />
    )
}

export default StepItemCheckbox