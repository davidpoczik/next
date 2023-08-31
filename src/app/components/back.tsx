'use client'
import { useRouter } from 'next/navigation'

export default function Back() {
    const router = useRouter()
    return <button className='btn btn-primary' onClick={router.back}>Back</button>
}