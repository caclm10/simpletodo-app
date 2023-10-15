import { useCallback, useEffect, useState } from "react"
import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { selectedTodoIdAtom, selectedTodoIndexAtom, todoListAtom } from "@/stores/todo-store"

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

export const useUpdateSelectedTodo = () => {
    const selectedTodoIndex = useAtomValue(selectedTodoIndexAtom)
    const [, setTodoList] = useAtom(todoListAtom)

    const update = useCallback((cb) => {
        setTodoList(todoList => {
            cb(todoList[selectedTodoIndex])
        })
    }, [selectedTodoIndex, setTodoList])

    return update
}

export const useSelectedTodoIndexEffect = () => {
    const selectedTodoId = useAtomValue(selectedTodoIdAtom)
    const setSelectedTodoIndex = useSetAtom(selectedTodoIndexAtom)
    const [todoList] = useAtom(todoListAtom)

    useEffect(() => {
        const index = todoList.findIndex(todo => todo.id === selectedTodoId)
        setSelectedTodoIndex(index)
    }, [selectedTodoId, setSelectedTodoIndex, todoList])
}