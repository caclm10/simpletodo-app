import TextField from '@mui/material/TextField'
import { useState } from 'react'

const AddStepFormInput = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const handleChange = event => {
        setValue(event.target.value)
    }

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            event.preventDefault()
            onSubmit()
        }
    }

    return (
        <TextField
            id="new-step-input"
            variant="standard"
            placeholder="Add Step"
            multiline
            fullWidth
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    )
}

export default AddStepFormInput