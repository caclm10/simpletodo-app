import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const UpdateProfileForm = () => {
    return (
        <Card component="form">
            <CardContent>
                <Typography
                    fontWeight={500}
                    fontSize="1.25rem"
                    lineHeight="1.75rem"
                >
                    Update Profile
                </Typography>

                <TextField variant="standard" name="name" label="Name" margin="dense" fullWidth />
                <TextField variant="standard" name="email" label="Email" margin="dense" fullWidth />

            </CardContent>
            <CardActions sx={{ justifyContent: 'end' }}>
                <Button>Submit</Button>
            </CardActions>
        </Card>
    )
}

export default UpdateProfileForm