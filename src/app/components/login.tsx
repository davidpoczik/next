'use client'
import { SyntheticEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../store/authSlice";

type withTarget = React.FormEvent<HTMLFormElement>

interface FormData {
    username: string;
    password: string;
}

export default function LoginForm() {
    const dispatch = useDispatch()


    const [formData, setFormData] = useState<FormData>({
        username: 'user',
        password: 'user'
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const onSubmitHandler = async (event: withTarget) => {
        event.preventDefault()
        const response = await fetch('/api/auth/login', { body: JSON.stringify(formData), method: 'post', cache: 'no-store' })
        if (response.status === 200) {
            const { success, user } = await response.json()
            if (success && user) {
                dispatch(login(user))
            }

        }
    }

    const onClickHandler = async (event: SyntheticEvent) => {
        event.preventDefault()
        const response = await fetch('/api/auth/verify', { method: 'post', cache: 'no-store' })
        const json = await response.json()

    }

    return (
        <div className="container">

            <form action="" onSubmit={onSubmitHandler}>
                <input type="text" value={formData.username} name="username" id="username" onChange={handleInputChange} placeholder="user name" />
                <input type="text" value={formData.password} name="password" id="password" onChange={handleInputChange} placeholder="password" />
                <input className="btn btn-primary" type="submit" />

              

            </form>
        </div>
    )
}