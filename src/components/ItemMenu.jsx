import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVertOutlined'
import { useState } from 'react'

const ItemMenu = ({
    itemId,
    instanceName = 'item',
    prefix = "",
    onRenameButtonClick,
    onDeleteButtonClick
}) => {
    const [menuButton, setMenuButton] = useState(null)
    const isMenuOpen = Boolean(menuButton)

    const handleClickMenuButton = event => {
        setMenuButton(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setMenuButton(null)
    }

    const handleRenamButtonClick = () => {
        onRenameButtonClick()
        handleCloseMenu()
    }

    const handleDeleteButtonClick = () => {
        onDeleteButtonClick()
        handleCloseMenu()
    }

    return (
        <>
            <IconButton
                id={`${prefix}${instanceName}-item-options-button-${itemId}`}
                edge="end"
                aria-label={`${prefix}${instanceName} item options button ${itemId}`}
                aria-controls={isMenuOpen ? `${prefix}${instanceName}-item-options-menu-${itemId}` : undefined}
                aria-haspopup="true"
                aria-expanded={isMenuOpen ? 'true' : undefined}
                onClick={handleClickMenuButton}
            >
                <MoreVertIcon />
            </IconButton>

            <Menu
                id={`${prefix}${instanceName}-item-options-menu-${itemId}`}
                anchorEl={menuButton}
                open={isMenuOpen}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': `${prefix}${instanceName}-item-options-button-${itemId}`
                }}
            >
                <MenuItem onClick={handleRenamButtonClick}>Rename {instanceName}</MenuItem>
                <MenuItem
                    sx={{
                        color: 'error.main'
                    }}
                    onClick={handleDeleteButtonClick}
                >
                    Delete {instanceName}
                </MenuItem>
            </Menu>
        </>
    )
}

export default ItemMenu