import { Avatar, Box, IconButton, Stack } from '@mui/material'
import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
    return (
        <div>
            <Stack direction={'row'} sx={{ px: 2.5, justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction={'row'} sx={{ gap: .5 }}>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Stack>
                <Stack direction={'row'} sx={{ gap: .5, alignItems: 'center' }}>
                    <IconButton>
                        <GroupIcon />
                    </IconButton>
                    <IconButton sx={{ '&:hover svg': { transform: 'rotate(45deg)' } }}>
                        <SettingsIcon sx={{ transition: '.3s' }} />
                    </IconButton>
                    <Avatar sx={{ width: 40, height: 40, backgroundColor: 'primary.light', color: 'primary.main' }} />
                </Stack>
            </Stack>
        </div>
    )
}

export default Navbar