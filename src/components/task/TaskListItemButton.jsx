import { useSetAtom } from 'jotai';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { selectedTaskIdAtom } from '@/stores/task-store';
import useElementHeight from '@/hooks/use-element-height';
import { useEffect } from 'react';

const TaskListItemButton = ({ id, content, completed, stepsCount, completedStepsCount, onHeightChange }) => {
    const setSelectedTaskId = useSetAtom(selectedTaskIdAtom)
    const [ref, height] = useElementHeight()

    const handleClick = () => {
        setSelectedTaskId(id)
    }

    useEffect(() => {
        onHeightChange(height)
    }, [height, onHeightChange])

    return (
        <Box ref={ref} width="100%">
            <ButtonBase
                sx={{
                    py: '8px',
                    pr: '48px',
                    pl: '56px',
                    height: '100%',
                    width: '100%',
                    flexDirection: 'column',
                    alignItems: 'start',
                    minHeight: '42px',
                    textAlign: 'start',
                }}
                onClick={handleClick}
            >
                <Typography
                    lineHeight="1.5rem"
                    fontSize="1rem"
                    sx={{
                        textDecoration: completed ? 'line-through' : 'none'
                    }}
                >
                    {content}
                </Typography>
                {stepsCount > 0 && (
                    <Typography
                        lineHeight="1.25rem"
                        fontSize="0.875rem"
                        color="grey.500"
                        sx={{
                            textDecoration: completedStepsCount === stepsCount ? 'line-through' : 'none'
                        }}
                    >
                        {completedStepsCount} of {stepsCount}
                    </Typography>

                )}
            </ButtonBase>
        </Box>
    )
}

export default TaskListItemButton