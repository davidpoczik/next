'use client'
import { useRouter } from "next/navigation"
import { SyntheticEvent, useState } from "react"

export default function Form() {

    const [keyword, setKeyword] = useState('')
    const router = useRouter()
    const onSubmitHandler = (e: SyntheticEvent<HTMLElement>) => {
        router.push(`/search/${keyword}`)
        e.preventDefault()
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setKeyword(event.target.value)
    }

    return (
    <>
    <br />
        <form action="" onSubmit={onSubmitHandler}>
            <input type="text" value={keyword} onChange={handleInputChange} placeholder="type person name and press enter" id="keyword" name="keyword" />
        </form>
        <br />
    </>
    )
}