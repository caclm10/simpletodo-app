import { useAtom } from 'jotai'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { selectedTaskIdAtom } from '@/stores/task-store'
import TaskDetailHeader from './TaskDetailHeader'

const TaskDetail = () => {
    const [selectedTaskId, setSelectedTaskId] = useAtom(selectedTaskIdAtom)

    const handleClose = () => {
        setSelectedTaskId(null)
    }

    return (
        <Drawer
            anchor="right"
            open={!!selectedTaskId}
            onClose={handleClose}
        >
            <Box py={5} px={1.5} maxWidth="400px">
                <TaskDetailHeader />

                {/* Step List */}

                {/* New Step Input */}

            </Box>
        </Drawer>
    )
}

export default TaskDetail