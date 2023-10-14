import Stack from '@mui/material/Stack';
import TaskListItem from './TaskListItem';

const TaskList = () => {

    return (
        <Stack spacing={1} mt={3}>
            <TaskListItem />
            <TaskListItem />
            <TaskListItem />
        </Stack>
    );
}

export default TaskList