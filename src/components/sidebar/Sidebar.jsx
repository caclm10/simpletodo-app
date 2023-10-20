import { blue } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import useDisclosure from '@/hooks/use-disclosure';
import SidebarHeader from './SidebarHeader'
import AddListButton from '../todo/AddListButton'
import TodoList from '../todo/TodoList'

const Sidebar = () => {
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
    const drawer = useDisclosure()

    return (
        <>
            <Box
                position="fixed"
                top={0}
                left={0}
                right={0}
                py={2}
                px={2}
                bgcolor={blue[50]}
                zIndex={10}
            >
                <IconButton
                    aria-label="sidebar toggler"
                    onClick={drawer.open}
                >
                    <MenuOutlinedIcon />
                </IconButton>
            </Box>

            <SwipeableDrawer
                variant={matchesMd ? 'permanent' : 'temporary'}
                anchor="left"
                open={drawer.isOpen}
                onClose={drawer.close}
                PaperProps={{
                    sx: {
                        width: '100%',
                        maxWidth: '300px',
                        bgcolor: "white",
                        display: 'flex',
                        flexDirection: 'column'
                    }
                }}
            >
                <SidebarHeader />

                <Box
                    flexGrow={1}
                    height={0}
                    overflow="auto"
                >
                    <TodoList />
                </Box>

                <AddListButton />
            </SwipeableDrawer>
        </>
    )
}

export default Sidebar