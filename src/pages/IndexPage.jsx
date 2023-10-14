import Sidebar from '@/components/sidebar/Sidebar'
import TodoDetail from '@/components/todo/TodoDetail'
import Box from '@mui/material/Box'

const IndexPage = () => {
    return (
        <Box
            minHeight="100vh"
            sx={{
                display: {
                    md: "grid"
                },
                gridTemplateColumns: {
                    md: "300px 1fr"
                }
            }}
        >
            <Sidebar />

            <TodoDetail />
        </Box>
    )
}

export default IndexPage