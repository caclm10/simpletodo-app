import App from '@/App'
import AuthLayout from '@/layouts/AuthLayout'
import ProtectedLayout from '@/layouts/ProtectedLayout'
import IndexPage from '@/pages/IndexPage'
import ManageAccoutPage from '@/pages/ManageAccoutPage'
import SignInPage from '@/pages/SignInPage'
import SignUpPage from '@/pages/SignUpPage'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <ProtectedLayout />,
                children: [
                    {
                        index: true,
                        element: <IndexPage />
                    },
                    {
                        path: "account",
                        element: <ManageAccoutPage />
                    }
                ]
            },
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: "/sign-up",
                        element: <SignUpPage />
                    },
                    {
                        path: "/sign-in",
                        element: <SignInPage />
                    }
                ],
            }
        ]
    }
])

export default router