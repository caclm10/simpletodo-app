import Box from '@mui/material/Box'
import { blue } from '@mui/material/colors'
import TodoDetailHeader from './TodoDetailHeader'
import { useAtomValue } from 'jotai'
import { selectedTodoIdAtom } from '@/stores/todo-store'

const TodoDetail = () => {
    const selectedTodoId = useAtomValue(selectedTodoIdAtom)

    return (
        <Box
            px={5}
            py={4}
            bgcolor={blue[50]}
        >
            {selectedTodoId && (
                <>
                    <TodoDetailHeader />
                </>
            )}
        </Box>
    )
}

export default TodoDetail