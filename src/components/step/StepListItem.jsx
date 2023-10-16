import Stack from '@mui/material/Stack'
import StepItemCheckbox from './StepItemCheckbox'
import StepItemInput from './StepItemInput'
import StepItemDeleteButton from './StepItemDeleteButton'

const StepListItem = ({ taskId, id, content, completed }) => {
    return (
        <Stack direction="row" spacing={1}>
            <StepItemCheckbox taskId={taskId} id={id} completed={completed} />

            <StepItemInput taskId={taskId} id={id} content={content} />

            <StepItemDeleteButton taskId={taskId} id={id} content={content} />
        </Stack>
    )
}

export default StepListItem