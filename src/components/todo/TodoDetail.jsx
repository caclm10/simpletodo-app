import Box from '@mui/material/Box'
import { blue } from '@mui/material/colors'
import TodoDetailHeader from './TodoDetailHeader'
import { useAtomValue } from 'jotai'
import { selectedTodoIdAtom } from '@/stores/todo-store'
import TaskList from '../task/TaskList'
import AddTaskInput from '../task/AddTaskInput'

const TodoDetail = () => {
    const selectedTodoId = useAtomValue(selectedTodoIdAtom)

    return (
        <Box
            pb={4}
            bgcolor={blue[50]}
            display="flex"
            flexDirection="column"
            flexGrow={1}
            sx={{
                px: {
                    xs: 3,
                    md: 5
                },
                pt: {
                    xs: 8,
                    md: 4
                }
            }}
        >
            {selectedTodoId && (
                <>
                    <TodoDetailHeader />

                    <TaskList />

                    <AddTaskInput />
                </>
            )}
        </Box>
    )
}

export default TodoDetail