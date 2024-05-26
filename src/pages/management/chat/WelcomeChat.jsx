import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../../../assets/img/logo512.png'

const WelcomeChat = () => {
    return (
        <Stack direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center', minHeight: '100%', backgroundColor: 'primary.light', border: '1px solid', borderColor: 'primary.main', borderRadius: 1.2 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Box component={'img'} src={Logo} sx={{ height: 150, width: 150 }} />
                <Typography variant="body1">Welcome to codewebz</Typography>
                <Typography variant="body1">You are signin with <Typography variant="body1" component={'span'} sx={{ color: 'primary.main' }}> sripathiids@gmail.com</Typography></Typography>
            </Box>
        </Stack>
    )
}

export default WelcomeChat