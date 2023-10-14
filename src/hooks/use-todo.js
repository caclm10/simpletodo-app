import { useEffect, useState } from "react"
import { useAtom, useAtomValue } from "jotai"
import { selectedTodoIndexAtom, todoListAtom } from "@/stores/todo-store"

export const useSelectedTodo = () => {
    const selectedTodoIndex = useAtomValue(selectedTodoIndexAtom)
    const [todoList] = useAtom(todoListAtom)
    const [todo, setTodo] = useState()

    useEffect(() => {
        setTodo(todoList[selectedTodoIndex])
    }, [selectedTodoIndex, todoList])

    return {
        todo,
        todoIndex: selectedTodoIndex,
    }
}