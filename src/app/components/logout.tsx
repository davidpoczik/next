import { useDispatch } from 'react-redux'
import { logout } from '@/app/store/authSlice'
import { useRouter } from 'next/navigation'
const Logout = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const onClickHandler = async () => {
        fetch('/api/auth/logout', {cache: 'no-store'}).then(() => {
            dispatch(logout())
            router.push('/')
        })
    }

    return <button onClick={onClickHandler}>
        Logout
    </button>
}

export default Logout