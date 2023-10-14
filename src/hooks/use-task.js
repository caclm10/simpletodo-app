import { useCallback } from "react"
import { useAtom, useAtomValue } from "jotai"
import { selectedTodoIndexAtom, todoListAtom } from "@/stores/todo-store"

export const useUpdateSelectedTodoTask = () => {
    const selectedTodoIndex = useAtomValue(selectedTodoIndexAtom)
    const [, setTodoList] = useAtom(todoListAtom)

    const update = useCallback((id, cb) => {
        setTodoList(todoList => {
            const index = todoList[selectedTodoIndex].tasks.findIndex(task => task.id === id)
            cb(todoList[selectedTodoIndex].tasks[index])
        })
    }, [selectedTodoIndex, setTodoList])

    return update
}