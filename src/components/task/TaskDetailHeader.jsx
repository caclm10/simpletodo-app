import Stack from '@mui/material/Stack'
import TaskItemCheckbox from './TaskItemCheckbox'
import { useSelectedTask } from '@/hooks/use-task'
import TaskDetailHeaderInput from './TaskDetailHeaderInput'
import TaskItemDeleteButton from './TaskItemDeleteButton'

const TaskDetailHeader = () => {
    const { task } = useSelectedTask()

    return (
        <Stack direction="row" spacing={1}>
            <TaskItemCheckbox id={task?.id} completed={task?.completed} />

            <TaskDetailHeaderInput id={task?.id} content={task?.content} completed={task?.completed} />

            <TaskItemDeleteButton id={task?.id} content={task?.content} />
        </Stack>
    )
}

export default TaskDetailHeader