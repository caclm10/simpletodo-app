import Stack from '@mui/material/Stack'
import { useSelectedTask } from "@/hooks/use-task"
import StepListItem from './StepListItem'

const StepList = () => {
    const { task } = useSelectedTask()

    if (!task || task.steps.length === 0) return

    return (
        <Stack my={3} pr={0.5}>
            {task.steps.map(step => (
                <StepListItem
                    key={step.id}
                    taskId={task.id}
                    id={step.id}
                    content={step.content}
                    completed={step.completed}
                />
            ))}
        </Stack>
    )
}

export default StepList