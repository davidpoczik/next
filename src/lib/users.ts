import { JWTPayload } from "jose"


export interface User extends JWTPayload {
    role?: string,
    password?: string
}

export const isValidUser = (users: User[], data: User): User | undefined => {
    return users.find(user => user.password === data.password && user.username === data.username)
}