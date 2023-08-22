export type User = {
    username: string,
    password: string,
    role?: string
}

export const isValidUser = (users: user[] , data: user) => {
    return users.find(user => user.password === data.password && user.username === data.username)
}
