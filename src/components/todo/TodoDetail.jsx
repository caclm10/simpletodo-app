import { useAtomValue } from 'jotai'
import { blue } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TodoDetailHeader from './TodoDetailHeader'
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
            justifyContent={selectedTodoId ? 'stretch' : 'center'}
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

            {!selectedTodoId && (
                <Typography
                    textAlign="center"
                    color="grey.500"
                >No selected To-Do yet. Select the list in the sidebar.</Typography>
            )}
        </Box>
    )
}

export default TodoDetail