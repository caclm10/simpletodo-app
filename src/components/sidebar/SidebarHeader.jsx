import { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import ButtonBase from '@mui/material/ButtonBase'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const SidebarHeader = () => {
    const [menuButton, setMenuButton] = useState(null)
    const isMenuOpen = Boolean(menuButton)

    const closeMenu = () => {
        setMenuButton(null)
    }

    const handleClickMenuButton = event => {
        setMenuButton(event.currentTarget)
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
                onClose={closeMenu}
            >
                <MenuItem component={Link} to="/account">
                    <ListItemIcon>
                        <SettingsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>Manage Account</ListItemText>
                </MenuItem>
                <MenuItem
                    onClick={closeMenu}
                    sx={{ color: 'error.main' }}
                >
                    <ListItemIcon>
                        <LogoutOutlinedIcon color="error" />
                    </ListItemIcon>
                    <ListItemText>Sign out</ListItemText>
                </MenuItem>
            </Menu>
        </>
    )
}

export default SidebarHeader