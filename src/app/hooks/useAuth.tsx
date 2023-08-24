'use client'
import React, { useEffect, useState } from 'react'
import { User } from "@/lib/users";
import { verifyJwtToken } from '@/lib/jwt';

export type AuthContextType = {
    user: User | null,
    login: (token: string) => void,
    logout: () => void
}

export interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthContext = React.createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null)

    const login = async (token: string): Promise<void> => {
        const secretResponse = await fetch('http://localhost:3000/api/auth/key', {method: 'GET'})
        const secret = await secretResponse.json()
        console.log(secret)
        const decodedToken = await verifyJwtToken(token, secret)
        if(decodedToken) {
            setUser(decodedToken)
            localStorage.setItem('token', token)
        }
    }

    const logout = (): void => {
        setUser(null)
        localStorage.removeItem('token')
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            login(token)
        }
    }, [])

    return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
}