'use client'
import { SyntheticEvent, useState } from "react"
import { AuthContextType } from "../hooks/useAuth";

type withTarget = React.FormEvent<HTMLFormElement>

interface FormData {
    username: string;
    password: string;
  }

export default function LoginForm({context}: {context: AuthContextType | undefined}) {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: ''
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const onSubmitHandler = async (event: withTarget ) => {
        event.preventDefault()
        const response = await fetch('/api/auth/login',  {body: JSON.stringify(formData), method: 'post'} )
        if (response.status === 200) {
            const {token} = await response.json()
            context?.login(token)
        }
    }

    return (
        <form action="" onSubmit={onSubmitHandler}>
            <input type="text" value={formData.username} name="username" id="username" onChange={handleInputChange} placeholder="user name" />
            <input type="text" value={formData.password} name="password" id="password" onChange={handleInputChange} placeholder="password" />
            <input type="submit" />
        </form>
    )
}