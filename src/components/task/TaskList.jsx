import Box from '@mui/material/Stack';
import Stack from '@mui/material/Stack';
import TaskListItem from './TaskListItem';
import { useSelectedTodo } from '@/hooks/use-todo';

const TaskList = () => {
    const { todo } = useSelectedTodo()

    return (
        <Box my={3} flexGrow={1} height={0} overflow="auto">
            <Stack spacing={1}>
                {todo && todo.tasks.length > 0 && todo.tasks.map(task => (
                    <TaskListItem
                        key={task.id}
                        id={task.id}
                        content={task.content}
                        completed={task.completed}
                    />
                ))}
            </Stack>
        </Box>
    );
}

export default TaskList