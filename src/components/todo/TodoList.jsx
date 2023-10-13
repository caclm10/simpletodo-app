import { useAtomValue } from 'jotai';
import List from '@mui/material/List';
import { todoListAtom } from '@/stores/todo-store';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const todoList = useAtomValue(todoListAtom)

    return (
        <List component="nav" aria-label="to-do list">
            {todoList.map(todo => <TodoListItem key={todo.id} id={todo.id} name={todo.name} />)}
        </List>
    )
}

export default TodoList