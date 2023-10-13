import { Link as RouterLink } from "react-router-dom"
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const AuthSwitchLink = ({ text, label, to }) => {
    return (
        <Typography sx={{ textAlign: "center", mt: 2 }}>
            {text} <Link component={RouterLink} to={to} underline="none">{label}</Link>
        </Typography>
    )
}

export default AuthSwitchLink