import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useSelectedTodo } from '@/hooks/use-todo'
import LineClamp from '../LineClamp'
import TodoNameInput from './TodoNameInput'
import DeleteTodoAlertDialog from './DeleteTodoAlertDialog'
import useDisclosure from '@/hooks/use-disclosure'
import ItemMenu from '../ItemMenu'

const TodoDetailHeader = () => {
    const { todo } = useSelectedTodo()
    const deleteAlert = useDisclosure()
    const [isEdit, setIsEdit] = useState(false)

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
                id={todo?.id}
                name={todo?.name}
                isOpen={deleteAlert.isOpen}
                onClose={deleteAlert.close}
            />

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
                        {todo?.name}
                    </LineClamp>
                </Typography>

                <TodoNameInput
                    id={todo?.id}
                    name={todo?.name || ""}
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

                <ItemMenu
                    itemId={todo?.id}
                    instanceName="list"
                    prefix="header-"
                    onRenameButtonClick={handleRenameButtonClick}
                    onDeleteButtonClick={handleDeleteButtonClick}
                />
            </Box>
        </>
    )
}

export default TodoDetailHeader