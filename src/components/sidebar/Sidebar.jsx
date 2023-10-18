import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import SidebarHeader from './SidebarHeader'
import AddListButton from '../todo/AddListButton'
import TodoList from '../todo/TodoList'

const Sidebar = () => {
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Drawer
            variant={matchesMd ? 'permanent' : 'temporary'}
            anchor="left"
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
        </Drawer>
    )
}

export default Sidebar