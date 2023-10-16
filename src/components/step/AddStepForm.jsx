import { useState } from 'react'
import { nanoid } from 'nanoid'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import AddIcon from '@mui/icons-material/Add'
import TextField from '@mui/material/TextField'
import { useUpdateSelectedTodoTask } from '@/hooks/use-task'

const AddStepForm = ({ id }) => {
  const updateTask = useUpdateSelectedTodoTask()
  const [value, setValue] = useState('')

  const addNewTask = () => {
    if (value.trim() === '') return

    updateTask(id, task => {
      task.steps.push({
        id: nanoid(),
        completed: false,
        content: value
      })
    })

    setValue('')
  }


  const handleChange = event => {
    setValue(event.target.value)
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      addNewTask()
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    addNewTask()
  }

  return (
    <Stack component="form" direction="row" spacing={1} onSubmit={handleSubmit}>
      <IconButton
        type="submit"
        aria-label="add new task step"
      >
        <AddIcon />
      </IconButton>

      <TextField
        id="new-step-input"
        variant="standard"
        placeholder="Add Step"
        multiline
        fullWidth
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        sx={{
          justifyContent: 'center'
        }}
      />
    </Stack>
  )
}

export default AddStepForm