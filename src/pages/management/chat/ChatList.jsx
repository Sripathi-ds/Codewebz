import { Avatar, Box, Stack, Typography, IconButton, List, ListItemButton, } from '@mui/material'
import React, { useEffect } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import axios from 'axios';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedChat } from '../../../redux/chat-slice'

const ContactListItem = ({ item, isMinimized }) => {
    const dispatch = useDispatch()
    return (
        <ListItemButton onClick={() => { dispatch(updateSelectedChat(item)) }}>
            <Stack direction={'row'} sx={{ gap: 1 }}>
                <Box>
                    <Avatar src={item.participants[1].avatarUrl} />
                </Box>
                <Box sx={{ width: 160, display: !isMinimized ? 'block' : 'none' }}>
                    <Typography variant="body1" >{item.participants[1].name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} >{item.messages[item.messages.length - 1].contentType === 'image' ? 'Sent a Photo' : item.messages[item.messages.length - 1].body}</Typography>
                </Box>
                <Box sx={{ display: !isMinimized ? 'block' : 'none', textAlign: "end" }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: 10 }} >{moment(item.messages[item.messages.length - 1].createdAt).format('hh:mm a')}</Typography>
                </Box>
            </Stack>
        </ListItemButton>
    )
}
const ChatList = ({ setIsMinimized, isMinimized }) => {

    const conversationList = useSelector((state) => state.chat.conversation)
    return (
        <Box>
            <Stack direction={'row'} sx={{ borderBottom: '1px solid #d3d3d3', pb: 1, gap: 1, justifyContent: isMinimized ? 'center' : 'space-between', transition: '.5s', transitionDelay: '5s', alignItems: 'center' }}>
                <Stack direction={'row'} sx={{ width: isMinimized ? 0 : '100%', visibility: isMinimized ? 'hidden' : 'visible', transition: '.5s', gap: 1, overflow: 'hidden' }}>
                    <Box>
                        <Avatar src='https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg' />
                    </Box>
                    <Box >
                        <Typography variant="body1">Sripathi</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>sripathiids@gmail.com</Typography>
                    </Box>
                </Stack>
                <Box>
                    <IconButton aria-label="" size='small' onClick={() => { setIsMinimized(prev => !prev) }}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Box>
            </Stack>
            <List sx={{ height: '70vh', maxHeight: '70vh', overflow: 'auto', mt: .5 }} className='custom-scroll'>
                {
                    conversationList.map((person, index) => {
                        return <ContactListItem key={index} isMinimized={isMinimized} item={person} />
                    })
                }
            </List>
        </Box>
    )
}

export default ChatList