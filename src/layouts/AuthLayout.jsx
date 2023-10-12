import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-cyan-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-md p-4 w-full max-w-md">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout