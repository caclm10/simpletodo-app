import { useCallback, useEffect, useState } from "react"
import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { selectedTodoIndexAtom, todoListAtom } from "@/stores/todo-store"
import { selectedTaskIdAtom, selectedTaskIndexAtom } from "@/stores/task-store"
import { useSelectedTodo } from "./use-todo"

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

export const useSelectedTaskIndexEffect = () => {
    const selectedTaskId = useAtomValue(selectedTaskIdAtom)
    const setSelectedTaskIndex = useSetAtom(selectedTaskIndexAtom)
    const { todo } = useSelectedTodo()

    useEffect(() => {
        if (selectedTaskId) {
            const index = todo.tasks.findIndex(task => task.id === selectedTaskId)
            setSelectedTaskIndex(index)
        } else {
            setSelectedTaskIndex(null)
        }
    }, [selectedTaskId, setSelectedTaskIndex, todo?.tasks])
}

export const useSelectedTask = () => {
    const selectedTaskIndex = useAtomValue(selectedTaskIndexAtom)
    const { todo } = useSelectedTodo()
    const [task, setTask] = useState(null)

    useEffect(() => {
        setTask(todo?.tasks[selectedTaskIndex])
    }, [selectedTaskIndex, todo?.tasks])

    return {
        task,
        taskIndex: selectedTaskIndex
    }
}