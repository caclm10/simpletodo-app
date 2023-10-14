import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

const TaskListItem = () => {
    return (
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
                    Lorem ipsum
                </Typography>
            </ButtonBase>

            <Box
                sx={{
                    position: 'absolute',
                    left: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                }}
            >
                <Checkbox
                    tabIndex={-1}
                />
            </Box>


            <Box
                sx={{
                    position: 'absolute',
                    right: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                }}
            >
                <IconButton
                    color="error"
                    aria-label="delete task"
                >
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default TaskListItem