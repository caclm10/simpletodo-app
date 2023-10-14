import { useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVertOutlined';
import { selectedTodoIdAtom, todoListAtom } from '@/stores/todo-store';
import LineClamp from '../LineClamp';

const TodoListItem = ({ id, name }) => {
    const [selectedTodoId, setSelectedTodoId] = useAtom(selectedTodoIdAtom)
    const [, setTodoList] = useAtom(todoListAtom)
    const [isEdit, setIsEdit] = useState(false)
    const [menuButton, setMenuButton] = useState(null)
    const [todoName, setTodoName] = useState(name)
    const inputRef = useRef()
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

    const handleInputBlur = () => {
        setIsEdit(false)

        if (todoName.trim() === "") {
            setTodoName(name)
        } else {
            setTodoList(todoList => {
                const index = todoList.findIndex(todo => todo.id === id)
                todoList[index].name = todoName
            })
        }
    }

    const handleInputChange = event => {
        setTodoName(event.target.value)
    }

    useEffect(() => {
        if (isEdit) {
            inputRef.current.focus()
        }
    }, [isEdit])

    useEffect(() => {
        setTodoName(name)
    }, [name])

    return (
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
                            onClick={handleCloseMenu}
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
                    primary={<LineClamp>{todoName}</LineClamp>}
                    sx={{
                        display: isEdit ? "none" : "block",
                    }}
                />
                <TextField
                    inputRef={inputRef}
                    variant="standard"
                    value={todoName}
                    sx={{
                        display: isEdit ? 'block' : 'none',
                    }}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                />
            </ListItemButton>
        </ListItem>
    )
}

export default TodoListItem