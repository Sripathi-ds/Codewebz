import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './chat-slice'
import userReducer from './user-slice'
export default configureStore({
    reducer: {
        // user: {}
        chat: chatReducer,
        users: userReducer
    }
})