import { createSlice } from '@reduxjs/toolkit';
import data from '../json/contactJson'
const initialState = {
    conversation: [...data.conversation_list],
    selectedChat: {},
    selectedChatConvo: []
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        updateSelectedChat: (state, action) => {
            state.selectedChat = action.payload
        },
        updateConversation: (state, action) => {
            state.conversation = action.payload
        },
    }
})

export const { updateSelectedChat, updateConversation } = chatSlice.actions
export default chatSlice.reducer