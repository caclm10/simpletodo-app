import { Link } from "react-router-dom"

const AuthSwitchLink = ({ text, label, to }) => {
    return (
        <p className="text-center mt-2">
            {text} <Link to={to} className="text-cyan-600">{label}</Link>
        </p>
    )
}

export default AuthSwitchLink