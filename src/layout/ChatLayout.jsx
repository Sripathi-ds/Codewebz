import { Box, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import ChatList from '../pages/management/chat/ChatList'
import ChatMessage from '../pages/management/chat/ChatMessage'

const ChatLayout = () => {
    const [isMinimized, setIsMinimized] = useState(false)
    return (
        <Box sx={{ '& *': { boxSizing: 'border-box' } }}>
            <Stack direction={'row'}>
                <Box sx={{ width: isMinimized ? 100 : 300, borderRight: '1px dashed #d3d3d3', p: 1.5, pr: 1, transition: '.5s' }}>
                    <ChatList isMinimized={isMinimized} setIsMinimized={setIsMinimized} />
                </Box>
                <Box sx={{ flexGrow: 1, p: 1.5 }}>
                    <ChatMessage />
                </Box>
            </Stack>
        </Box>
    )
}

export default ChatLayout