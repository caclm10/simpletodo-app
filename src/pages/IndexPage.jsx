import Sidebar from '@/components/sidebar/Sidebar'
import Box from '@mui/material/Box'
import { blue } from '@mui/material/colors'

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

            <div style={{ background: blue[50] }}>

            </div>
        </Box>
    )
}

export default IndexPage