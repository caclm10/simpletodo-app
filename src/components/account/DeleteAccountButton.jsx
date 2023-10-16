import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const DeleteAccountButton = () => {
    return (
        <Card>
            <CardContent
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Stack>
                    <Typography fontWeight="500">Delete Account</Typography>
                    <Typography color="grey.500" fontSize="0.875rem" lineHeight="1.25rem">Delete your account and all its associated data.</Typography>
                </Stack>

                <Button variant="contained" color="error">
                    Delete
                </Button>
            </CardContent>
        </Card>
    )
}

export default DeleteAccountButton