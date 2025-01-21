import { Avatar, Box, Button, Grid, MenuItem, Modal, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { Select, TextField } from 'formik-mui';
import { addUser } from '../../../redux/user-slice'; 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '45%',
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  p: 2,
};

const generateId = (limit = 18) => {
  let id = "";
  let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < limit; i++) {
    id += characters.charAt(Math.floor(Math.random() * 36));
  }
  return id;
}

const UserList = () => {
  const users = useSelector((state) => state.users.usersList)
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  console.log(users)
  return (
    <Box>
      <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
        <Typography variant="body1" color="initial" sx={{ fontSize: 18, fontWeight: 600 }}>Users</Typography>
        <Box>
          <Button variant='contained' size='small' startIcon={<PersonAddAltIcon />} onClick={() => setIsOpen(true)}>Add Users</Button>
        </Box>
      </Stack>
      <Box sx={{ mt: 1 }}>
        {/* {
          users.map((user, index) => {
            return <Typography key={index}>{user.name}</Typography>
          })
        } */}
        <Grid container spacing={1}>
          {
            users.map((user, index) => {
              return <Grid key={index} item xs={3}>
                <Box sx={{ width: '100%', backgroundColor: 'primary.light', p: 1, borderRadius: 1 }}>
                  <Avatar src={user.avatarUrl} />
                  <Typography >{user.name}</Typography>
                  <Typography >{user.email}</Typography>
                  <Typography >{user.phoneNumber}</Typography>
                  <Typography >{user.role}</Typography>
                </Box>
              </Grid>
            })
          }

        </Grid>
      </Box>
      <Modal
        open={isOpen}
        onClose={() => { setIsOpen(false) }}
      >
        <Box sx={style}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              role: '',
              phoneNumber: '',
              address: '',
            }}
            onSubmit={(values, { resetForm }) => {
              dispatch(addUser({ id: generateId(), ...values }))
              resetForm()
              setIsOpen(false) 
            }}
          >
            <Form>
              <Box>
                <Stack direction={'row'} sx={{ gap: 1, mb: 2 }}>
                  <Box>
                    <PersonAddAltIcon />
                  </Box>
                  <Box>
                    <Typography variant="body1" color="initial" sx={{ mb: 1 }}>Add User</Typography>
                  </Box>
                </Stack>

                <Box>
                  <Grid spacing={2} container>
                    <Grid item xs={6}>
                      <Field
                        component={TextField}
                        label='User Name'
                        fullWidth
                        size='small'
                        name='name' />
                    </Grid>

                    <Grid item xs={6}>
                      <Field
                        component={TextField}
                        label='Email'
                        fullWidth
                        size='small'
                        name='email' />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        component={TextField}
                        label='Phone No'
                        fullWidth
                        size='small'
                        type='number'
                        name='phoneNumber' />
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        component={Select}
                        label='Role'
                        formControl={{ fullWidth: true }}
                        size='small'
                        name='role' >
                        <MenuItem value='UI/UX designer'>UI/UX designer</MenuItem>
                        <MenuItem value='Frond-end developer'>Frond-end developer</MenuItem>
                        <MenuItem value='Back-end developer'>Back-end developer</MenuItem>
                        <MenuItem value='Full-stack developer'>Full Stack Developer</MenuItem>
                      </Field>
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        label='Enter address'
                        multiline
                        rows={3}
                        fullWidth
                        size='small'
                        name='address' />
                    </Grid>
                  </Grid>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Button type='submit' variant='contained' sx={{ mr: 1 }}>Save</Button>
                  <Button variant='outlined' onClick={() => { setIsOpen(false) }}>Cancel</Button>
                </Box>

              </Box>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </Box >
  )
}

export default UserList