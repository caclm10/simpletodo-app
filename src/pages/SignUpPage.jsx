import AuthSubmitButton from "@/components/auth/AuthSubmitButton"
import AuthSwitchLink from "@/components/auth/AuthSwitchLink"
import AuthTitle from "@/components/auth/AuthTitle"
import Input from "@/components/common/Input"

const SignUpPage = () => {
    return (
        <>
            <AuthTitle text="Create new account" />

            <form>
                <Input name="name" label="Name" placeholder="Name" />
                <Input name="email" label="Email" placeholder="Email address" />
                <Input type="password" name="password" label="Password" placeholder="Password" />

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