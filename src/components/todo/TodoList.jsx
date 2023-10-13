import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';

const TodoList = () => {
    const [selectedListIndex, setSelectedListIndex] = useState(null)

    const handleListItemClick = (event, index) => {
        setSelectedListIndex(index);
    };

    return (
        <List component="nav" aria-label="to-do list">
            <ListItemButton
                selected={selectedListIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
            >
                <ListItemIcon>
                    <ListIcon />
                </ListItemIcon>
                <ListItemText primary="BlogArtisan" />
            </ListItemButton>
            <ListItemButton
                selected={selectedListIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
            >
                <ListItemIcon>
                    <ListIcon />
                </ListItemIcon>
                <ListItemText primary="Untitled List" />
            </ListItemButton>
            <ListItemButton
                selected={selectedListIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
            >
                <ListItemIcon>
                    <ListIcon />
                </ListItemIcon>
                <ListItemText
                    primary="List of Things to Learn for Brighter Future"
                    sx={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1
                    }}
                />
            </ListItemButton>
        </List>
    )
}

export default TodoList