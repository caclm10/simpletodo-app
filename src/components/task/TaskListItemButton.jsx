import { useSetAtom } from 'jotai';
import { selectedTaskIdAtom } from '@/stores/task-store';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const TaskListItemButton = ({ id, content, completed }) => {
    const setSelectedTaskId = useSetAtom(selectedTaskIdAtom)

    const handleClick = () => {
        setSelectedTaskId(id)
    }

    return (
        <ButtonBase
            sx={{
                py: '8px',
                pr: '48px',
                pl: '56px',
                height: '100%',
                width: '100%',
                justifyContent: 'start',
                minHeight: '42px',
                textAlign: 'start'
            }}
            onClick={handleClick}
        >
            <Typography
                lineHeight="20.02px"
                fontSize="14px"
                sx={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                {content}
            </Typography>
        </ButtonBase>
    )
}

export default TaskListItemButton