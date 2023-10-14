import { useEffect, useRef, useState } from 'react'
import TextField from '@mui/material/TextField'
import { useAtom } from 'jotai'
import { todoListAtom } from '@/stores/todo-store'

const TodoNameInput = ({ id, name, isShow, onBlur, sx = {} }) => {
    const [todoName, setTodoName] = useState(name)
    const [, setTodoList] = useAtom(todoListAtom)
    const inputRef = useRef()

    const handleInputBlur = () => {
        onBlur()

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
        setTodoName(name)
    }, [name, setTodoName])

    useEffect(() => {
        if (isShow) {
            inputRef.current.focus()
        }
    }, [isShow])

    return (
        <TextField
            inputRef={inputRef}
            variant="standard"
            value={todoName}
            fullWidth
            sx={{
                display: isShow ? 'block' : 'none',
                ...sx
            }}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
        />
    )
}

export default TodoNameInput