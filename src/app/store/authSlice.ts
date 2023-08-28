import { getUserFromCookie } from "@/lib/cookies";
import { User } from "@/lib/users";
import { createSlice } from "@reduxjs/toolkit";


export interface UserState {
    user: User | null
}

const initialState: UserState = {
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            console.log('logout')
            state.user = null

        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
