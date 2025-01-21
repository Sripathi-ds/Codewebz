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
            state.usersList = [...state.usersList, action.payload]
        },
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer