import Box from '@mui/material/Box'
import SidebarHeader from './SidebarHeader'
import AddListButton from '../todo/AddListButton'
import TodoList from '../todo/TodoList'

const Sidebar = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            bgcolor="white"
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
        </Box>
    )
}

export default Sidebar