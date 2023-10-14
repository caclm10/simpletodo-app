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

export const useDeleteTodo = () => {
    const [todoList, setTodoList] = useAtom(todoListAtom)
    const [selectedTodoId, setSelectedTodoId] = useAtom(selectedTodoIdAtom)

    const deleteTodo = id => {
        let index
        setTodoList(todoList => {
            index = todoList.findIndex(todo => todo.id === id)

            return todoList.filter(todo => todo.id !== id)
        })

        if (selectedTodoId === id) {
            if (todoList.length > 1) {
                if (index === todoList.length - 1) {
                    index -= 1
                } else {
                    index += 1
                }

                setSelectedTodoId(todoList[index].id)
            } else {
                setSelectedTodoId(null)
            }
        }
    }

    return deleteTodo
}