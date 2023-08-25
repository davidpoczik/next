'use server'
import { User } from "./users"
import { cookies } from "next/headers"
import { verifyJwtToken } from "./jwt"

export const deleteTokenCookie = async () => {

    cookies().delete('token')
}

export const getUserFromCookie =   () :User | null  => {
    const token = cookies().get('token')?.value
    if(token) {
        const decodedToken = verifyJwtToken(token)
        return decodedToken
    }
    return null
}