import { useAtom } from "jotai"
import { useUpdateSelectedTodo } from "@/hooks/use-todo"
import { selectedTaskIdAtom } from "@/stores/task-store"
import DeleteAlertDialog from "../DeleteAlertDialog"

const DeleteTaskAlertDialog = ({ id, content, isOpen, onClose }) => {
    const updateTodo = useUpdateSelectedTodo()
    const [selectedTaskId, setSelectedTaskId] = useAtom(selectedTaskIdAtom)

    const handleConfirm = () => {
        updateTodo(todo => {
            todo.tasks = todo.tasks.filter(task => task.id !== id)
        })

        if (selectedTaskId) {
            setSelectedTaskId(null)
        }

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