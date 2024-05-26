import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import ChatLayout from '../../../layout/ChatLayout'

const Chat = () => {
    return (
        <Box>
            <Box sx={{ mt: 1 }}>
                <Typography variant="body1" color="initial" sx={{ fontSize: 18, fontWeight: 600 }}>Chat</Typography>
            </Box>
            <Paper sx={{ mt: 1, p: 0 }}>
                <ChatLayout />
            </Paper>
        </Box>
    )
}

export default Chat