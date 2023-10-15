import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import TaskListItemCheckbox from './TaskListItemCheckbox';
import TaskListItemDeleteButton from './TaskListItemDeleteButton';

const TaskListItem = ({ id, content, completed }) => {
    return (
        <>
            <Box
                position="relative"
                bgcolor="background.paper"
                display="flex"
                alignItems="strecth"
                borderRadius={1}
                overflow="hidden"
            >
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
                >
                    <Typography
                        lineHeight="20.02px"
                        fontSize="14px"
                    >
                        {content}
                    </Typography>
                </ButtonBase>


                <TaskListItemCheckbox id={id} completed={completed} />

                <TaskListItemDeleteButton id={id} content={content} />
            </Box>
        </>
    )
}

export default TaskListItem