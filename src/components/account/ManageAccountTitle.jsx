import Typography from '@mui/material/Typography'

const ManageAccountTitle = ({ text = '' }) => {
    return (
        <Typography
            fontWeight={500}
            fontSize="1.25rem"
            lineHeight="1.75rem"
        >
            {text}
        </Typography>
    )
}

export default ManageAccountTitle