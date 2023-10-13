import Typography from '@mui/material/Typography';

const AuthTitle = ({ text = "" }) => {
    return (
        <Typography
            textAlign="center"
            mb={4}
            fontWeight="500"
            fontSize="1.5rem"
            lineHeight="2rem"
        >
            {text}
        </Typography>
    )
}

export default AuthTitle