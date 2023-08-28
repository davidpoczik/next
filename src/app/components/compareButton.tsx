'use client'
import { RootState } from "../store/authStore"
import { useSelector } from "react-redux"

export default function CompareButton() {
    const userState = useSelector((state: RootState)=> state.user)
    const {user} = userState
    const isLoggedIn = !!user
    const isAdmin = user?.role === 'admin'
    return (
        <>
        {isLoggedIn && isAdmin ? <button>compare</button> : 'Cannot compare'}
        </>
    )
}