import { createSlice } from '@reduxjs/toolkit';
import data from '../json/contactJson'
const initialState = {
    usersList: [...data.contact_list]
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.usersList += action.payload
        },
    }
})

export const { } = userSlice.actions
export default userSlice.reducer