import { useAtom } from 'jotai'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { selectedTaskIdAtom } from '@/stores/task-store'
import TaskDetailHeader from './TaskDetailHeader'
import StepList from '../step/StepList'
import AddStepForm from '../step/AddStepForm'

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
            PaperProps={{
                sx: {
                    width: '100%',
                    maxWidth: '400px'
                }
            }}
        >
            <Box py={5} px={1.5} display="flex" flexDirection="column" height="100%">
                <TaskDetailHeader />

                <Box
                    flexGrow={1}
                    height={0}
                    overflow="auto"
                >
                    <StepList />
                </Box>

                <AddStepForm id={selectedTaskId} />

            </Box>
        </Drawer>
    )
}

export default TaskDetail