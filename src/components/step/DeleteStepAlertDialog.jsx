import { useUpdateSelectedTodoTask } from "@/hooks/use-task"
import DeleteAlertDialog from "../DeleteAlertDialog"

const DeleteStepAlertDialog = ({ taskId, id, content, isOpen, onClose }) => {
    const updateTask = useUpdateSelectedTodoTask()

    const handleConfirm = () => {
        updateTask(taskId, task => {
            task.steps = task.steps.filter(step => step.id !== id)
        })

        onClose()
    }

    return (
        <DeleteAlertDialog
            title="Delete step"
            content={`"${content}" will be permanently deleted.`}
            titleId={`step-delete-alert-dialog-title`}
            contentId={`step-delete-alert-dialog-description`}
            isOpen={isOpen}
            onClose={onClose}
            onConfirm={handleConfirm}
        />
    )
}

export default DeleteStepAlertDialog