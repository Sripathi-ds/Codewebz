import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import 'swiper/css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Dashboard = () => {
    const gradientColor = 'linear-gradient(135deg, rgba(104, 205, 249, 0.2), rgba(7, 141, 238, 0.2)) rgb(255, 255, 255)'
    return (
        <div>
            <Box>
                <Box>
                    <Grid container spacing={1.5}>
                        <Grid item xs={8}>
                            <Box sx={{ p: 3, color: 'primary.main', background: gradientColor, borderRadius: 3 }}>
                                <Typography variant="h5" sx={{ fontWeight: 600, }}>Welcome back 👋</Typography>
                                <Typography variant="h5" sx={{ fontWeight: 600 }}>Jaydon Frankie</Typography>
                                <Typography variant="body1" sx={{ mt: 2, fontWeight: 400, maxWidth: '60%' }}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</Typography>
                                <Box sx={{ mt: 5 }}>
                                    <Button variant="contained" color="primary">
                                        Go Now
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ boxSizing: 'border-box', height: '100%', background: gradientColor, borderRadius: 3 }}>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ mt: 2 }}>
                    <Grid container spacing={1.5} >
                        {
                            [1, 2, 3, 4].map((index) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                    <Paper>
                                        <Box>
                                            <Typography variant="body1" color="initial">Heading {index}</Typography>
                                            <Stack direction={'row'} sx={{ alignItems: 'center', mt: .5 }}>
                                                <Typography variant="body1" color="initial">{index * 3 / (index + 1)}</Typography>
                                                <ArrowDropUpIcon sx={{ transform: index / 2 == 1 ? 'scaleY(-1)' : 'scaleY(1)', color: index / 2 == 1 ? 'error.main' : 'success.main' }} />
                                            </Stack>
                                        </Box>
                                        <Typography variant="body1" sx={{ fontSize: 30 }}>{1152 * (index * 10)}</Typography>
                                    </Paper>
                                </Grid>
                            ))
                        }

                    </Grid>
                </Box>


            </Box>
        </div >
    )
}

export default Dashboard