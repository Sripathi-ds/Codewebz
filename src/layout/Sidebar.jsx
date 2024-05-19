import React from 'react'
import Logo from '../assets/img/logo512.png'
import { Avatar, Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ height: '100%', '& div': { boxSizing: 'border-box' } }}>
            <Stack direction={'row'} sx={{ gap: 1, alignItems: 'center' }}>
                <Box sx={{ height: 60, width: 60 }}>
                    <Box component={'img'} src={Logo} sx={{ height: '100%', width: '100%', objectFit: 'contain' }}></Box>
                </Box>
                <Box>
                    <Typography variant="body1" sx={{ fontSize: 22, fontWeight: 700, }}>Company</Typography>
                </Box>
            </Stack>
            <Box sx={{ mt: 2, minHeight: 'calc(100% - 135px)' }}>
                <Box>
                    <Typography variant="body2" sx={{ textTransform: 'uppercase', fontWeight: 700, color: 'text.secondary' }}>Overview</Typography>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('/')}>
                                {/* <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon> */}
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <Box>
                    <Typography variant="body2" sx={{ textTransform: 'uppercase', fontWeight: 700, color: 'text.secondary' }}>Products</Typography>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('/')}>
                                {/* <ListItemIcon>
                                    <InboxIcon />
                                </Lis> */}
                                <ListItemText primary="All Products" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('/')}>
                                {/* <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon> */}
                                <ListItemText primary="Cart" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box sx={{ border: '1px solid #d3d3d3', p: 1, borderRadius: 1 }}>
                <Stack direction={'row'} sx={{ gap: 1, alignItems: 'center' }}>
                    <Box>
                        <Avatar sx={{backgroundColor:'#d3d3d3'}}></Avatar>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant='body1'>UserName</Typography>
                        <Typography variant='body1'>example@company.com</Typography>
                    </Box>
                    <Box>
                        <IconButton aria-label="" size='small' color='error' sx={{ border: '1px solid' }} onClick={() => { navigate('/account/signin') }}>
                            <PowerSettingsNewIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default Sidebar