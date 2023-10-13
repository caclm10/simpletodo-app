import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'

const AddListButton = () => {
    return (
        <Button
            sx={{
                justifyContent: 'start',
                paddingY: 2,
                paddingX: 3
            }}
            startIcon={<AddIcon />}
        >
            New List
        </Button>
    )
}

export default AddListButton