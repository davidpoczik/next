'use client'

import { Provider } from 'react-redux'
import store from './authStore'
import { User } from '@/lib/users'
import { login } from './authSlice'

const StoreProvider = ({ children, initialState }: {children: React.ReactNode, initialState: User | null}) => {
    initialState &&  store.dispatch(login(initialState))
    return (
        <Provider store={store} >
            {children}
        </Provider>
    )

}
export default StoreProvider