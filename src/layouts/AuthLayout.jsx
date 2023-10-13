import Box from '@mui/material/Box'
import { blue } from '@mui/material/colors';
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <Box
            minHeight="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={4}
            bgcolor={blue[50]}
        >
            <Box
                bgcolor="#fff"
                borderRadius="0.375rem"
                width="100%"
                maxWidth="28rem"
                p={4}
            >
                <Outlet />
            </Box>
        </Box>
    )
}

export default AuthLayout