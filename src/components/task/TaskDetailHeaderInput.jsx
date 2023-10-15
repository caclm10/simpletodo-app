import { useUpdateSelectedTodoTask } from '@/hooks/use-task'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'

const TaskDetailHeaderInput = ({ id, completed, content }) => {
    const updateTask = useUpdateSelectedTodoTask()
    const [taskContent, setTaskContent] = useState('')

    const handleContentUpdate = () => {
        if (taskContent.trim() === "") {
            setTaskContent(content)
        } else {
            updateTask(id, task => {
                task.content = taskContent
            })
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
                    textDecoration: completed ? 'line-through' : 'none'
                }
            }}
            onBlur={handleContentUpdate}
        />
    )
}

export default TaskDetailHeaderInput