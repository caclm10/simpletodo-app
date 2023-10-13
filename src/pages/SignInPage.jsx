import AuthSubmitButton from "@/components/auth/AuthSubmitButton"
import AuthSwitchLink from "@/components/auth/AuthSwitchLink"
import AuthTitle from "@/components/auth/AuthTitle"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"

const SignInPage = () => {
    return (
        <>
            <AuthTitle text="Welcome back" />

            <form>
                <Stack spacing={3}>
                    <TextField name="email" label="Email" placeholder="Email address" />
                    <TextField type="password" name="password" label="Password" placeholder="Password" />
                </Stack>


                <AuthSubmitButton />
            </form>

            <AuthSwitchLink
                to="/sign-up"
                text="Don't have an account?"
                label="Sign Up"
            />
        </>
    )
}

export default SignInPage