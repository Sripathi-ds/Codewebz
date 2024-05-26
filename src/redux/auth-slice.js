import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    status: null,
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userAthentication: (state, action) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        }
    }
})

export const { userAthentication } = authSlice.actions

export default authSlice.reducer