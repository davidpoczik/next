'use client'
import { useSelector } from "react-redux"
import { RootState } from "../store/authStore"
import LoginForm from "./login"
import Logout from "./logout"

const Header = () => {
    const { user } = useSelector((state: RootState) => state.user)
    const isLoggedIn = !!user
    return (
        <div>
            <div>
                {user
                    ? user.username
                    : 'Guest'
                }
            </div>
            <div>
                {user
                    ? ` Role: ${user.role}`
                    : ''
                }
            </div>
            {isLoggedIn && <Logout/>}
            {!isLoggedIn && <LoginForm></LoginForm>}
        </div>
    )
}
export default Header