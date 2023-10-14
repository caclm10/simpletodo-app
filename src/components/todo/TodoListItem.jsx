import { useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVertOutlined';
import { selectedTodoIdAtom, todoListAtom } from '@/stores/todo-store';

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
                        id={`list-menu-button-${id}`}
                        edge="end"
                        aria-label={`list menu button ${id}`}
                        onClick={handleClickMenuButton}
                    >
                        <MoreVertIcon />
                    </IconButton>

                    <Menu
                        id={`list-menu-${id}`}
                        anchorEl={menuButton}
                        open={isMenuOpen}
                        onClose={handleCloseMenu}
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
                    primary={todoName}
                    sx={{
                        overflow: "hidden",
                        display: isEdit ? "none" : "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1,
                    }}
                />
                <InputBase
                    inputRef={inputRef}
                    type="text"
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