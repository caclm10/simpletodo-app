import DeleteAlertDialog from "../DeleteAlertDialog"
import { useUpdateSelectedTodo } from "@/hooks/use-todo"

const DeleteTaskAlertDialog = ({ id, content, isOpen, onClose }) => {
    const updateTodo = useUpdateSelectedTodo()

    const handleConfirm = () => {
        updateTodo(todo => {
            todo.tasks = todo.tasks.filter(task => task.id !== id)
        })

        onClose()
    }

    return (
        <DeleteAlertDialog
            title="Delete task"
            content={`"${content}" will be permanently deleted.`}
            titleId={`todo-delete-alert-dialog-title`}
            contentId={`todo-delete-alert-dialog-description`}
            isOpen={isOpen}
            onClose={onClose}
            onConfirm={handleConfirm}
        />
    )
}

export default DeleteTaskAlertDialog