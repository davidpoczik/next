'use client'
import { SyntheticEvent } from "react"

type withTarget = SyntheticEvent & { target: {username: HTMLInputElement, password: HTMLInputElement}}

export default function LoginForm() {
    const onSubmitHandler = async (event: withTarget ) => {
        event.preventDefault()
        const form = event.target
        const data = {
            username: form.username.value,
            password: form.password.value
        }


    fetch('/api/auth/login',  {body: JSON.stringify(data), method: 'post'} ).then(response => {

    })
    }
    return (
        <form action="" onSubmit={onSubmitHandler}>
            <input type="text" name="username" id="username" placeholder="user name" />
            <input type="text" name="password" id="password" placeholder="password" />
            <input type="submit" />
        </form>
    )
}