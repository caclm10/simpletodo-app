import { Link } from 'react-router-dom'
import { blue } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import UpdateProfileForm from '@/components/account/UpdateProfileForm'
import NewPasswordForm from '@/components/account/NewPasswordForm'
import DeleteAccountButton from '@/components/account/DeleteAccountButton'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import UpdateProfileImageForm from '@/components/account/UpdateProfileImageForm'

const ManageAccoutPage = () => {
    return (
        <Box
            minHeight="100vh"
            bgcolor={blue[50]}
            py={7}
        >
            <Container maxWidth="sm">
                <Stack spacing={3}>
                    <Box>
                        <Button
                            component={Link}
                            to="/"
                            startIcon={<ArrowBackOutlinedIcon />}
                        >
                            Back</Button>
                    </Box>

                    <UpdateProfileImageForm />

                    <UpdateProfileForm />

                    <NewPasswordForm />

                    <DeleteAccountButton />
                </Stack>
            </Container>
        </Box>
    )
}

export default ManageAccoutPage