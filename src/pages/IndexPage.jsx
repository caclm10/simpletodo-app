import { useEffect } from 'react'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import Box from '@mui/material/Box'
import { selectedTodoIdAtom, selectedTodoIndexAtom, todoListAtom } from '@/stores/todo-store'
import Sidebar from '@/components/sidebar/Sidebar'
import TodoDetail from '@/components/todo/TodoDetail'

const IndexPage = () => {
    const selectedTodoId = useAtomValue(selectedTodoIdAtom)
    const setSelectedTodoIndex = useSetAtom(selectedTodoIndexAtom)
    const [todoList] = useAtom(todoListAtom)

    useEffect(() => {
        const index = todoList.findIndex(todo => todo.id === selectedTodoId)
        setSelectedTodoIndex(index)
    }, [selectedTodoId, setSelectedTodoIndex, todoList])

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