import { useState } from 'react';
import Box from '@mui/material/Box';
import TaskListItemButton from './TaskListItemButton';
import TaskItemDeleteButton from './TaskItemDeleteButton';
import TaskItemCheckbox from './TaskItemCheckbox';

const TaskListItem = ({ id, content, completed, stepsCount, completedStepsCount }) => {
    const [isThreeLines, setIsThreeLines] = useState(false)

    const handleHeightChange = height => {
        if (height > 80) {
            setIsThreeLines(true)
        } else {
            setIsThreeLines(false)
        }
    }

    return (
        <Box
            position="relative"
            bgcolor="background.paper"
            display="flex"
            alignItems="strecth"
            borderRadius={1}
            overflow="hidden"
        >

            <TaskListItemButton
                id={id}
                content={content}
                completed={completed}
                stepsCount={stepsCount}
                completedStepsCount={completedStepsCount}
                onHeightChange={handleHeightChange}
            />

            <Box
                sx={{
                    position: 'absolute',
                    left: '5px',
                    top: `${isThreeLines ? '10px' : '50%'}`,
                    transform: `translateY(${isThreeLines ? '0' : '-50%'})`
                }}
            >
                <TaskItemCheckbox id={id} completed={completed} />
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    right: '5px',
                    top: `${isThreeLines ? '10px' : '50%'}`,
                    transform: `translateY(${isThreeLines ? '0' : '-50%'})`
                }}
            >
                <TaskItemDeleteButton id={id} content={content} />
            </Box>
        </Box>
    )
}

export default TaskListItem