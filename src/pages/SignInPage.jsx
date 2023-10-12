import AuthSubmitButton from "@/components/auth/AuthSubmitButton"
import AuthSwitchLink from "@/components/auth/AuthSwitchLink"
import AuthTitle from "@/components/auth/AuthTitle"
import Input from "@/components/common/Input"

const SignInPage = () => {
    return (
        <>
            <AuthTitle text="Welcome back" />

            <form>
                <Input name="email" label="Email" placeholder="Email address" />
                <Input type="password" name="password" label="Password" placeholder="Password" />

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