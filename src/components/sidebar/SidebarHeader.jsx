import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import ButtonBase from '@mui/material/ButtonBase'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const SidebarHeader = () => {
    const [menuButton, setMenuButton] = useState(null)
    const isMenuOpen = Boolean(menuButton)

    const handleClickMenuButton = event => {
        setMenuButton(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setMenuButton(null)
    }

    return (
        <>
            <Stack
                component={ButtonBase}
                direction="row"
                spacing={1}
                p={2}
                width="100%"
                justifyContent="start"
                onClick={handleClickMenuButton}
            >
                <Avatar>VZ</Avatar>
                <Stack alignItems="start">
                    <Typography variant="body2">Vestia Zeta</Typography>
                    <Typography variant="body2" color="grey.600">veszeta@gmail.com</Typography>
                </Stack>
            </Stack>

            <Menu
                id="profile-menu"
                anchorEl={menuButton}
                open={isMenuOpen}
                onClose={handleCloseMenu}
            >
                <MenuItem onClick={handleCloseMenu}>Edit Profile</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Edit Password</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default SidebarHeader