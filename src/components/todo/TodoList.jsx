import { useAtom } from 'jotai';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { todoListAtom } from '@/stores/todo-store';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const [todoList] = useAtom(todoListAtom)

    return (
        <>
            {todoList.length === 0 && (
                <Box
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    px={2}
                >
                    <Typography
                        color="grey.500"
                        textAlign="center"
                    >
                        No To-Do list found.
                    </Typography>
                </Box>
            )}

            {todoList.length > 0 && (
                <List component="nav" aria-label="to-do list">
                    {todoList.map(todo => <TodoListItem key={todo.id} id={todo.id} name={todo.name} />)}
                </List>
            )}
        </>
    )
}

export default TodoList