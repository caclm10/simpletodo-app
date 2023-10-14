import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField'
import AddIcon from '@mui/icons-material/Add';
import { useUpdateSelectedTodo } from '@/hooks/use-todo';
import { nanoid } from 'nanoid';

const AddTaskInput = () => {
    const updateTodo = useUpdateSelectedTodo()
    const [value, setValue] = useState("")

    const addTask = () => {
        if (value.trim() === "") return

        updateTodo(todo => {
            todo.tasks.push({
                id: nanoid(),
                content: value,
                completed: false,
                steps: []
            })
        })

        setValue("")
    }

    const handleChange = event => {
        setValue(event.target.value)
    }

    const handleKeyDown = event => {
        if (event.key === "Enter") {
            event.preventDefault()
            addTask()
        }
    }

    return (
        <TextField
            id="new-task"
            label="New Task"
            value={value}
            sx={{
                bgcolor: 'background.paper'
            }}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            color="primary"
                            aria-label="add new task submit button"
                            edge="end"
                            onClick={addTask}
                        >
                            <AddIcon />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}

export default AddTaskInput