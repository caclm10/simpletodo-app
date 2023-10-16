import { useEffect, useRef, useState } from 'react'
import TextField from '@mui/material/TextField'
import { useAtom } from 'jotai'
import { todoListAtom } from '@/stores/todo-store'

const TodoNameInput = ({ id, name, isShow, onBlur, sx = {} }) => {
    const [todoName, setTodoName] = useState(name)
    const [, setTodoList] = useAtom(todoListAtom)
    const inputRef = useRef()

    const updateName = () => {
        if (todoName.trim() === "") {
            setTodoName(name)
        } else {
            setTodoList(todoList => {
                const index = todoList.findIndex(todo => todo.id === id)
                todoList[index].name = todoName
            })
        }
    }

    const handleBlur = () => {
        onBlur()
        updateName()
    }

    const handleChange = event => {
        setTodoName(event.target.value)
    }

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            event.preventDefault()
            inputRef.current.blur()
        }
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
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
        />
    )
}

export default TodoNameInput