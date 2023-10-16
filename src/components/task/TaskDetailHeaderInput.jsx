import { useUpdateSelectedTodoTask } from '@/hooks/use-task'
import TextField from '@mui/material/TextField'
import { useEffect, useRef, useState } from 'react'

const TaskDetailHeaderInput = ({ id, completed, content }) => {
    const updateTask = useUpdateSelectedTodoTask()
    const [taskContent, setTaskContent] = useState('')
    const inputRef = useRef()

    const updateContent = () => {
        if (taskContent.trim() === "") {
            setTaskContent(content)
        } else {
            updateTask(id, task => {
                task.content = taskContent
            })
        }
    }

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            event.preventDefault()
            inputRef.current.blur()
        }
    }

    const handleChange = event => {
        setTaskContent(event.target.value)
    }

    useEffect(() => {
        setTaskContent(content || '')
    }, [content])

    return (
        <TextField
            inputRef={inputRef}
            variant="standard"
            fullWidth
            multiline
            value={taskContent}
            onChange={handleChange}
            InputProps={{
                sx: {
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                    textDecoration: completed ? 'line-through' : 'none',
                }
            }}
            inputProps={{
                style: {
                    maxHeight: '128px',
                    overflow: `auto`,
                }
            }}
            onKeyDown={handleKeyDown}
            onBlur={updateContent}
        />
    )
}

export default TaskDetailHeaderInput