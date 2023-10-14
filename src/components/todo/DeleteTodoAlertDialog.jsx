import DeleteAlertDialog from "../DeleteAlertDialog"
import { useAtom } from "jotai"
import { selectedTodoIdAtom, todoListAtom } from "@/stores/todo-store"

const DeleteTodoAlertDialog = ({ id, name, isOpen, onClose }) => {
    const [todoList, setTodoList] = useAtom(todoListAtom)
    const [selectedTodoId, setSelectedTodoId] = useAtom(selectedTodoIdAtom)

    const handleConfirm = () => {
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

        onClose()
    }

    return (
        <DeleteAlertDialog
            title="Delete list"
            content={`"${name}" will be permanently deleted.`}
            titleId={`todo-delete-alert-dialog-title`}
            contentId={`todo-delete-alert-dialog-description`}
            isOpen={isOpen}
            onClose={onClose}
            onConfirm={handleConfirm}
        />
    )
}

export default DeleteTodoAlertDialog