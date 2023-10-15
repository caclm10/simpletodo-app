import Box from '@mui/material/Box'
import Sidebar from '@/components/sidebar/Sidebar'
import TodoDetail from '@/components/todo/TodoDetail'
import TaskDetail from '@/components/task/TaskDetail'
import { useSelectedTodoIndexEffect } from '@/hooks/use-todo'
import { useSelectedTaskIndexEffect } from '@/hooks/use-task'

const IndexPage = () => {
    useSelectedTodoIndexEffect()
    useSelectedTaskIndexEffect()

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

            <TaskDetail />
        </Box>
    )
}

export default IndexPage