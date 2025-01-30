import React from 'react'
import Logo from '../assets/img/logo512.png'
import { Avatar, Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, IconButton, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Sidebar = ({ isSidebarMinimized }) => {
    const navigate = useNavigate()
    const listItemStyle = {
        flexDirection: isSidebarMinimized ? 'column' : 'row',
        gap: isSidebarMinimized ? '2px' : '8px',
        '& .MuiListItemText-root span': {
            fontSize: isSidebarMinimized ? '11px' : 'inherit',
            color: 'inherit'
        },
        '& .MuiListItemButton-root': {
            color: 'primary.main'
        }
    }
    return (
        <Box sx={{ height: '100%', '& div': { boxSizing: 'border-box' } }}>
            <Stack direction={'row'} sx={{ gap: 1, alignItems: 'center', justifyContent: isSidebarMinimized ? 'center' : 'start' }}>
                <Box sx={{ height: 50, width: 50, maskImage: `url(${Logo})`, maskRepeat: "no-repeat", maskSize: '100%', backgroundColor: 'orange' }}>
                    {/* <Box component={'img'} src={Logo} sx={{ height: '100%', width: '100%', objectFit: 'contain' }}></Box> */}
                </Box>
                <Box sx={{ display: isSidebarMinimized ? 'none' : 'inline-flex' }}>
                    <Typography variant="body1" sx={{ fontSize: 22, fontWeight: 600, }}>Codewebz</Typography>
                </Box>
            </Stack>
            <Box sx={{ mt: 2, height: 'calc(100vh - 85px)', maxHeight: 'calc(100vh - 85px)', overflow: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
                <Accordion defaultExpanded>
                    <AccordionSummary sx={{ px: 0, display: isSidebarMinimized ? 'none' : 'block' }}>
                        <Typography variant="body2" sx={{ textTransform: 'uppercase', fontWeight: 700, color: 'primary.main' }}>Overviews</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ ...listItemStyle }} onClick={() => navigate('/')}>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <SpeedOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Dashboard" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ ...listItemStyle }} onClick={() => navigate('/')}>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <ShoppingBagOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Ecommerce" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ ...listItemStyle }} onClick={() => navigate('/')}>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <AnalyticsOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Analytics" />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton sx={{ ...listItemStyle }} onClick={() => navigate('/')}>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <AccountBalanceOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Banking" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ ...listItemStyle }} onClick={() => navigate('/')}>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <AirplaneTicketOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Booking" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ ...listItemStyle }} onClick={() => navigate('/')}>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <DescriptionOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Files" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary sx={{ px: 0, display: isSidebarMinimized ? 'none' : 'block' }}>
                        <Typography variant="body2" sx={{ textTransform: 'uppercase', fontWeight: 700, color: 'primary.main' }}>Management</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ ...listItemStyle }} onClick={() => navigate('/')}>

                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <EmailOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Mail" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ ...listItemStyle }} onClick={() => navigate('/chat')}>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <ChatOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Chat" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ ...listItemStyle }} onClick={() => navigate('/users')}>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <AccountCircleOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="User" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ ...listItemStyle }} onClick={() => navigate('/productlist')}>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <ShoppingCartOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Product" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ ...listItemStyle }} onClick={() => navigate('/voicetranslator')}>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <ChecklistOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Translator" />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton sx={{ ...listItemStyle }} onClick={() => navigate('/')}>
                                    <ListItemIcon sx={{ color: 'inherit' }}>

                                        <ReceiptOutlinedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Invoice" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
            </Box>
            {/* <Box sx={{ border: '1px solid #d3d3d3', p: 1, borderRadius: 1 }}>
                <Stack direction={'row'} sx={{ gap: 1, alignItems: 'center' }}>
                    <Box>
                        <Avatar sx={{ backgroundColor: '#d3d3d3' }}></Avatar>
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
            </Box> */}
        </Box >
    )
}

export default Sidebar