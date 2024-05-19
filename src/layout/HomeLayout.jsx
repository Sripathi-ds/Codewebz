import { Box, Stack } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const HomeLayout = () => {
    return (
        <Box>
            {/* <Navbar /> */}
            <Box sx={{ '& *': { boxSizing: 'border-box' } }}>
                <Stack direction='row'>
                    <Box sx={{ flexBasis: 250, borderRight: '1px dashed #000', p: 1 }}>
                        <Sidebar />
                    </Box>
                    <Box sx={{ p: 1, height: '100vh', flexGrow: 1 }}>
                        <Outlet />
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default HomeLayout