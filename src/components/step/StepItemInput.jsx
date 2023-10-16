import { useEffect, useRef, useState } from 'react'
import TextField from '@mui/material/TextField'
import { useUpdateSelectedTodoTask } from '@/hooks/use-task'

const StepItemInput = ({ taskId, id, content }) => {
    const update = useUpdateSelectedTodoTask()
    const [value, setValue] = useState('')
    const inputRef = useRef()

    const handleChange = event => {
        setValue(event.target.value)
    }

    const handleBlur = () => {
        if (value.trim() === "") {
            setValue(content)
        } else {
            update(taskId, task => {
                const index = task.steps.findIndex(step => step.id === id)
                task.steps[index].content = value
            })
        }
    }

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            event.preventDefault()
            inputRef.current.blur()
        }
    }

    useEffect(() => {
        setValue(content || '')
    }, [content])

    return (
        <TextField
            inputRef={inputRef}
            name={`step-input-${id}`}
            variant="standard"
            size="small"
            multiline
            fullWidth
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            sx={{
                justifyContent: 'center'
            }}
            inputProps={{
                style: {
                    maxHeight: '46px',
                    overflow: 'hidden auto'
                }
            }}
        />
    )
}

export default StepItemInput