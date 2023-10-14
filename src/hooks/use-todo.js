import { useEffect, useState } from "react"
import { useAtom, useAtomValue } from "jotai"
import { selectedTodoIdAtom, todoListAtom } from "@/stores/todo-store"

export const useSelectedTodo = () => {
    const selectedTodoId = useAtomValue(selectedTodoIdAtom)
    const [todoList] = useAtom(todoListAtom)
    const [todo, setTodo] = useState(null)
    const [index, setIndex] = useState(null)

    useEffect(() => {
        const selectedTodoIndex = todoList.findIndex(todo => todo.id === selectedTodoId)
        if (selectedTodoIndex !== -1) {
            setIndex(selectedTodoIndex)
            setTodo(todoList[selectedTodoIndex])
        } else {
            setIndex(null)
            setTodo(null)
        }
    }, [selectedTodoId, todoList])

    return {
        selectedTodo: todo,
        selectedTodoIndex: index,
    }
}