'use client'
import { useSelector } from "react-redux"
import { RootState } from "../store/authStore"
import LoginForm from "./login"
import Logout from "./logout"

const Header = () => {
    const { user } = useSelector((state: RootState) => state.user)
    const isLoggedIn = !!user
    return (
        <>
            <div className="header">
                <div className="header-title">Star wars character search</div>
                <div>
                    {user
                        ? `name: ${user.username}`
                        : 'name: Guest'
                    }
                
                    {user
                        ? ` Role: ${user.role}`
                        : ''
                    }
                </div>
                {isLoggedIn && <Logout />}
            </div>

            {!isLoggedIn && <LoginForm></LoginForm>}
        </>

    )
}
export default Header