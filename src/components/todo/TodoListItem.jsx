import { useState } from 'react';
import { useAtom } from 'jotai';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import { selectedTodoIdAtom } from '@/stores/todo-store';
import useDisclosure from '@/hooks/use-disclosure';
import LineClamp from '../LineClamp';
import TodoNameInput from './TodoNameInput';
import DeleteTodoAlertDialog from './DeleteTodoAlertDialog';
import ItemMenu from '../ItemMenu';

const TodoListItem = ({ id, name }) => {
    const [selectedTodoId, setSelectedTodoId] = useAtom(selectedTodoIdAtom)
    const deleteAlert = useDisclosure()
    const [isEdit, setIsEdit] = useState(false)

    const handleListItemClick = id => () => {
        setSelectedTodoId(id);
    };

    const handleRenameButtonClick = () => {
        setIsEdit(true)
    }

    const handleDeleteButtonClick = () => {
        deleteAlert.open()
    }

    const handleInputBlur = () => {
        setIsEdit(false)
    }

    return (
        <>
            <DeleteTodoAlertDialog
                id={id}
                name={name}
                isOpen={deleteAlert.isOpen}
                onClose={deleteAlert.close}
            />

            <ListItem
                key={id}
                secondaryAction={
                    <ItemMenu
                        itemId={id}
                        instanceName="list"
                        onRenameButtonClick={handleRenameButtonClick}
                        onDeleteButtonClick={handleDeleteButtonClick}
                    />
                }
                disablePadding
            >
                <ListItemButton
                    role={undefined}
                    selected={id === selectedTodoId}
                    onClick={handleListItemClick(id)}
                >
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={<LineClamp>{name}</LineClamp>}
                        sx={{
                            display: isEdit ? "none" : "block",
                        }}
                    />
                    <TodoNameInput
                        id={id}
                        name={name}
                        isShow={isEdit}
                        onBlur={handleInputBlur}
                    />
                </ListItemButton>
            </ListItem>
        </>
    )
}

export default TodoListItem