import { Avatar, Box, Typography, Stack, IconButton } from '@mui/material'
import React, { useEffect, useId, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SendIcon from '@mui/icons-material/Send';
import moment from 'moment';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-mui';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { updateConversation } from '../../../redux/chat-slice';
import WelcomeChat from './WelcomeChat';

const MessageItem = ({ message, sender }) => {
    return (
        <Stack alignItems={message.senderId === sender ? 'start' : 'end'} sx={{ gap: .2 }}>
            {
                message.contentType === 'text' && <Box sx={{ maxWidth: '40%', backgroundColor: 'primary.light', p: 1, borderRadius: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}> {message.body}</Typography>
                </Box>
            }
            {
                message.contentType === 'image' && <Box>
                    <Box component={'img'} src={message.body} sx={{ width: 120, height: 120, borderRadius: 1 }} />
                </Box>
            }
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{moment(message.createdAt).format('hh:mm a')}</Typography>
        </Stack>

    )
}

const generateId = (limit = 18) => {
    let id = "";
    let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < limit; i++) {
        id += characters.charAt(Math.floor(Math.random() * 36));
    }
    return id;
}

const ChatMessage = () => {
    const messageListRef = useRef(null);
    const dispatch = useDispatch()
    const selectedChat = useSelector((state) => state.chat.selectedChat);
    const allConversation = useSelector((state) => state.chat.conversation);
    const [messageType, setMessageType] = useState('');
    const filterSelectedChat = allConversation.filter(chat => chat.id === selectedChat.id);
    const selectedConvo = { ...filterSelectedChat[0] };
    const handleSubmitMessage = (values, { setSubmitting, resetForm }) => {
        if (values.body) {
            const newMessage = {
                id: generateId(),
                attachments: values.attachment,
                body: values.body,
                contentType: messageType,
                createdAt: moment.utc(new Date()).format(),
                senderId: "userId",
            };
            let updatedMessages = allConversation.map((prev) => {
                if (prev.id === selectedChat.id) {
                    return { ...prev, messages: [...prev.messages, newMessage] };
                }
                return prev
            })
            dispatch(updateConversation(updatedMessages));
        }
        setSubmitting(false);
        resetForm();
    };

    const scrollToBottom = () => {
        if (messageListRef.current) {
            const scrollHeight = messageListRef.current.scrollHeight;
            const height = messageListRef.current.clientHeight;
            const maxScrollTop = scrollHeight - height;
            messageListRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
        }
    };
    useEffect(() => {
        scrollToBottom()
    }, [allConversation])

    return (
        <>
            {
                selectedChat.id ?
                    <Box>
                        <Stack direction={'row'} sx={{ gap: 1, borderBottom: '1px solid #d3d3d3', pb: 1 }}>
                            <Box>
                                <Avatar src={selectedConvo.participants && selectedConvo.participants[1].avatarUrl} />
                            </Box>
                            <Box >
                                <Typography variant="body1">{selectedConvo.participants && selectedConvo.participants[1].name}</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 10 }}>{selectedConvo.participants && selectedConvo.participants[1].status}</Typography>
                            </Box>
                        </Stack>
                        <Box ref={messageListRef} className='custom-scroll' sx={{ maxHeight: 'calc(70vh - 48px)', overflow: 'auto', mt: .5 }}>
                            <Stack justifyContent={'end'} sx={{ minHeight: 'calc(70vh - 48px)', gap: 1, height: '100%' }}>
                                {
                                    selectedConvo.messages && <>
                                        {
                                            selectedConvo.messages.map((message, index) => (
                                                <MessageItem message={message} key={index} sender={selectedConvo.participants && selectedConvo.participants[1].id} />
                                            ))
                                        }
                                    </>

                                }
                            </Stack>
                        </Box>

                        <Box >
                            <Formik
                                initialValues={{
                                    attachment: [],
                                    image: '',
                                    body: ''
                                }}
                                onSubmit={handleSubmitMessage}
                            >
                                {({ values, setFieldValue, isSubmitting }) => (
                                    <Form>
                                        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Field
                                                    component={TextField}
                                                    fullWidth
                                                    name='body'
                                                    placeholder='Type a message'
                                                    size='small'
                                                    onFocus={() => setMessageType('text')}
                                                />
                                            </Box>
                                            <Stack direction={'row'} sx={{ gap: 1 }}>
                                                <IconButton name='image' component='label' onClick={() => setMessageType('image')}>
                                                    <AddPhotoAlternateOutlinedIcon />
                                                    <input type="file" accept='image/*' onChange={(event) => setFieldValue('image', event.currentTarget.files[0])} hidden />
                                                </IconButton>
                                                <IconButton name='attachment' component='label'>
                                                    <AttachFileIcon />
                                                    <input type="file" onChange={(event) => setFieldValue('attachment', event.currentTarget.files)} hidden multiple />
                                                </IconButton>

                                                <IconButton type='submit'>
                                                    <SendIcon />
                                                </IconButton>
                                            </Stack>
                                        </Box>
                                    </Form>
                                )}
                            </Formik>


                        </Box>
                    </Box >
                    :
                    <WelcomeChat />
            }
        </>

    )
}

export default ChatMessage