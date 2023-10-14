import { useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVertOutlined'
import { useSelectedTodo } from '@/hooks/use-todo'
import LineClamp from '../LineClamp'
import TodoNameInput from './TodoNameInput'

const TodoDetailHeader = () => {
    const { selectedTodo } = useSelectedTodo()
    const [isEdit, setIsEdit] = useState(false)
    const [menuButton, setMenuButton] = useState(null)
    const isMenuOpen = Boolean(menuButton)

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
    }

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
                    {selectedTodo?.name}
                </LineClamp>
            </Typography>

            <TodoNameInput
                id={selectedTodo?.id}
                name={selectedTodo?.name || ""}
                isShow={isEdit}
                sx={{
                    flexGrow: 1,
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