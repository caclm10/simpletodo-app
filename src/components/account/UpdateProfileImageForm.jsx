import { getNameInitials, stringToColor } from '@/lib/string';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import VisuallyHiddenInput from '../VisuallyHiddenInput';
import ManageAccountTitle from './ManageAccountTitle';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveProfilePictureButton from './RemoveProfilePictureButton';

const UpdateProfileImageForm = () => {
    return (
        <Card>
            <CardContent>
                <ManageAccountTitle text="Profile Picture" />
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt={2}
                >
                    <ButtonBase
                        component="label"
                        role={undefined}
                        tabIndex={-1}
                        centerRipple
                    >
                        <Avatar
                            sx={{
                                width: 128,
                                height: 128,
                                fontSize: '3rem',
                                lineHeight: '1',
                                bgcolor: stringToColor('Vestia Zeta')
                            }}
                        >
                            {getNameInitials('Vestia Zeta')}
                        </Avatar>

                        <VisuallyHiddenInput type="file" />
                    </ButtonBase>

                    <Stack mt={2} spacing={2} direction="row">
                        <IconButton component="label" role={undefined} color="primary" aria-label="update picture">
                            <EditOutlinedIcon />
                            <VisuallyHiddenInput type="file" />
                        </IconButton>

                        <RemoveProfilePictureButton />
                    </Stack>
                </Box>

            </CardContent>
        </Card>
    )
}

export default UpdateProfileImageForm