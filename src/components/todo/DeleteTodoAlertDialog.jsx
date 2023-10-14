import { useDeleteTodo } from "@/hooks/use-todo"
import DeleteAlertDialog from "../DeleteAlertDialog"

const DeleteTodoAlertDialog = ({ id, name, isOpen, onClose }) => {
    const deleteTodo = useDeleteTodo()

    const handleConfirm = () => {
        deleteTodo(id)

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