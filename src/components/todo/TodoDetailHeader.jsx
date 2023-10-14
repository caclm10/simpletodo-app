import { useEffect, useRef, useState } from 'react'
import { useAtom } from 'jotai'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVertOutlined'
import { useSelectedTodo } from '@/hooks/use-todo'
import { todoListAtom } from '@/stores/todo-store'
import LineClamp from '../LineClamp'

const TodoDetailHeader = () => {
    const { selectedTodo, selectedTodoIndex } = useSelectedTodo()
    const [, setTodoList] = useAtom(todoListAtom)
    const [todoName, setTodoName] = useState("")
    const [isEdit, setIsEdit] = useState(false)
    const [menuButton, setMenuButton] = useState(null)
    const isMenuOpen = Boolean(menuButton)
    const inputRef = useRef()

    const handleMenuButtonClick = event => {
        setMenuButton(event.currentTarget)
    }

    const handleMenuClose = () => {
        setMenuButton(null)
    }

    const handleRenameClick = () => {
        handleMenuClose()
        setIsEdit(true)
    }

    const handleInputBlur = () => {
        setIsEdit(false)

        if (todoName.trim() === "") {
            setTodoName(selectedTodo?.name)
        } else {
            setTodoList(todoList => {
                todoList[selectedTodoIndex].name = todoName
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
        if (selectedTodo?.name) {
            setTodoName(selectedTodo?.name)
        }
    }, [selectedTodo?.name])

    return (
        <Box
            display="flex"
        >
            <Typography
                flexGrow={1}
                component="h3"
                fontSize="1.5rem"
                lineHeight="2rem"
                fontWeight="500"
                display={isEdit ? 'none' : 'flex'}
                alignItems="center"
            >
                <LineClamp>
                    {todoName}
                </LineClamp>
            </Typography>

            <TextField
                inputRef={inputRef}
                variant="standard"
                spellCheck={false}
                value={todoName}
                fullWidth
                sx={{
                    flexGrow: 1,
                    display: isEdit ? 'block' : 'none',
                    "& .MuiInputBase-input": {
                        pt: 0,
                        pb: 0,
                        fontSize: '1.5rem',
                        lineHeight: '2rem',
                        fontWeight: '500',
                        height: '40px',
                        letterSpacing: '0.00938em'
                    }
                }}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
            />

            <IconButton
                id="todo-detail-options-button"
                aria-label="todo detail options button"
                aria-controls={isMenuOpen ? 'todo-detail-options-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isMenuOpen ? 'true' : undefined}
                sx={{
                    ml: 1.5
                }}
                onClick={handleMenuButtonClick}
            >
                <MoreVertIcon />
            </IconButton>

            <Menu
                id="todo-detail-options-menu"
                anchorEl={menuButton}
                open={isMenuOpen}
                onClose={handleMenuClose}
                MenuListProps={{
                    'aria-labelledby': 'todo-detail-options-button'
                }}
            >
                <MenuItem onClick={handleRenameClick}>Rename List</MenuItem>
                <MenuItem
                    sx={{
                        color: 'error.main'
                    }}
                    onClick={handleMenuClose}
                >
                    Delete List
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default TodoDetailHeader