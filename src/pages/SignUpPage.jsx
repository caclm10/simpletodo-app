import AuthSubmitButton from "@/components/auth/AuthSubmitButton"
import AuthSwitchLink from "@/components/auth/AuthSwitchLink"
import AuthTitle from "@/components/auth/AuthTitle"
import TextField from "@mui/material/TextField"
import Stack from '@mui/material/Stack';

const SignUpPage = () => {
    return (
        <>
            <AuthTitle text="Create new account" />

            <form>
                <Stack spacing={3}>
                    <TextField
                        name="name"
                        label="Name"
                        placeholder="Name"
                    />

                    <TextField
                        name="email"
                        label="Email"
                        placeholder="Email address"
                    />

                    <TextField
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Password"
                    />
                </Stack>

                <AuthSubmitButton />
            </form>

            <AuthSwitchLink
                to="/sign-in"
                text="Already have an account?"
                label="Sign In"
            />
        </>
    )
}

export default SignUpPage