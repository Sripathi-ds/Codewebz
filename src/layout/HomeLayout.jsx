import { Box, IconButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
const HomeLayout = () => {
    const [isSidebarMinimized, setIsSidebarMinimized] = useState(false)
    return (
        <Box>
            <Box sx={{ '& *': { boxSizing: 'border-box' } }}>
                <Stack direction='row'>
                    <Box sx={{ minWidth: isSidebarMinimized ? 100 : 220, borderRight: '1px dashed #d4d4d4', p: 1, position: 'relative' }}>
                        <Sidebar isSidebarMinimized={isSidebarMinimized} />
                        <Box sx={{ position: 'absolute', right: -12, top: 20, zIndex: 2 }}>
                            <IconButton size='small' onClick={() => setIsSidebarMinimized(prev => !prev)} sx={{
                                border: '1px solid #d4d4d4', background: '#fff', '&:hover': { background: '#fff' }, p: '3px'
                            }}>
                                <ChevronLeftOutlinedIcon sx={{ fontSize: 15, transform: isSidebarMinimized ? 'scale(-1)' : 'scale(1)' }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box className='custom-scroll' sx={{ height: '100vh', maxHeight: '100vh', overflow: 'auto', flexGrow: 1, position: 'relative' }}>
                        <Box sx={{ py: 1, position: 'sticky', top: 0, left: 0, zIndex: 1, backdropFilter: 'blur(4px)', backgroundColor: '#ffffff94' }}>
                            <Navbar />
                        </Box>
                        <Box sx={{ px: 2 ,pb: 2 }}>
                            <Outlet />
                        </Box>
                    </Box>
                </Stack>
            </Box >
        </Box >
    )
}

export default HomeLayout