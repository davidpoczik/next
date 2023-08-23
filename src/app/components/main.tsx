'use client'

import { useContext } from "react"
import { AuthContext } from "../hooks/useAuth"
import LoginForm from "./login"

export default function MainArea() {
    const authContext = useContext(AuthContext)
    return (
        <main>
            {!authContext?.user ? <LoginForm context={authContext}></LoginForm> : <p>logout</p>}          
        </main>
    )
    
}