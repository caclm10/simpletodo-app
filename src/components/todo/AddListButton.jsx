import { useSetAtom } from 'jotai';
import { nanoid } from 'nanoid';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'
import { todoListAtom } from '@/stores/todo-store';

const AddListButton = () => {
    const setTodoList = useSetAtom(todoListAtom)

    const handleClick = () => {
        setTodoList(list => [
            ...list,
            {
                id: nanoid(),
                name: 'Untitled',
                tasks: []
            }
        ])
    }

    return (
        <Button
            sx={{
                justifyContent: 'start',
                paddingY: 2,
                paddingX: 3
            }}
            startIcon={<AddIcon />}
            onClick={handleClick}
        >
            New List
        </Button>
    )
}

export default AddListButton