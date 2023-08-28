'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEventHandler, SyntheticEvent } from "react"

export default function Form() {
    const router = useRouter()
    const onSubmitHandler = (e: SyntheticEvent<HTMLElement>) => {
        router.push(`/search/${e.target.keyword.value || ''}`)
        e.preventDefault()
    }
    return (
    <>
    <br />
        <form action="" onSubmit={onSubmitHandler}>
            <input type="text" placeholder="keyword" id="keyword" name="keyword" />
        </form>
        <br />
        <Link href='/compare'>home</Link>
    </>
    )
}