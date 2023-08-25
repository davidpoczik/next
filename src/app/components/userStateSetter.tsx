'use client'
import { useDispatch } from 'react-redux'
import { User } from "@/lib/users";
import { login } from '../store/authSlice';

export default function UserStateSetter({initialUserState}:  { initialUserState: User | null }) {
    if(initialUserState) {
        const dispatch = useDispatch();
        dispatch(login(initialUserState))
        return <></>
    }
}