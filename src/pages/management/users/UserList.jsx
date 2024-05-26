import { Avatar, Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useSelector } from 'react-redux';

const UserList = () => {
  const users = useSelector((state) => state.users.usersList)
  console.log(users)
  return (
    <Box>
      <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
        <Typography variant="body1" color="initial" sx={{ fontSize: 18, fontWeight: 600 }}>Users</Typography>
        <Box>
          <Button variant='contained' size='small' startIcon={<PersonAddAltIcon />}>Add Users</Button>
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
    </Box >
  )
}

export default UserList