import { useState } from 'react';
import { useAtom } from 'jotai';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVertOutlined';
import { selectedTodoIdAtom } from '@/stores/todo-store';
import useDisclosure from '@/hooks/use-disclosure';
import LineClamp from '../LineClamp';
import TodoNameInput from './TodoNameInput';
import DeleteTodoAlertDialog from './DeleteTodoAlertDialog';

const TodoListItem = ({ id, name }) => {
    const [selectedTodoId, setSelectedTodoId] = useAtom(selectedTodoIdAtom)
    const deleteAlert = useDisclosure()
    const [isEdit, setIsEdit] = useState(false)
    const [menuButton, setMenuButton] = useState(null)
    const isMenuOpen = Boolean(menuButton)

    const handleListItemClick = id => () => {
        setSelectedTodoId(id);
    };

    const handleClickMenuButton = event => {
        setMenuButton(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setMenuButton(null)
    }

    const handleRenameClick = () => {
        setIsEdit(true)
        handleCloseMenu()
    }

    const handleDeleteClick = () => {
        deleteAlert.open()
        handleCloseMenu()
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
                    <>
                        <IconButton
                            id={`todo-item-options-button-${id}`}
                            edge="end"
                            aria-label={`todo item options button ${id}`}
                            aria-controls={isMenuOpen ? `todo-item-options-menu-${id}` : undefined}
                            aria-haspopup="true"
                            aria-expanded={isMenuOpen ? 'true' : undefined}
                            onClick={handleClickMenuButton}
                        >
                            <MoreVertIcon />
                        </IconButton>

                        <Menu
                            id={`todo-item-options-menu-${id}`}
                            anchorEl={menuButton}
                            open={isMenuOpen}
                            onClose={handleCloseMenu}
                            MenuListProps={{
                                'aria-labelledby': `todo-item-options-button-${id}`
                            }}
                        >
                            <MenuItem onClick={handleRenameClick}>Rename List</MenuItem>
                            <MenuItem
                                sx={{
                                    color: 'error.main'
                                }}
                                onClick={handleDeleteClick}
                            >
                                Delete List
                            </MenuItem>
                        </Menu>
                    </>
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