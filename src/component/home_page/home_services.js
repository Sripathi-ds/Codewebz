
import { Box, Button, Grid, Typography } from '@mui/material';
import Style from '../../assets/css/style_main.module.css'
const Home_services = () => {
    return (
        <Box sx={{ my: 5 }}>
            <Typography className='text-center' color={'white'} fontSize={25} fontFamily={'Merienda'}>Our Services</Typography>
            <Box sx={{ my: 5 }}>
                <Grid container colGap={2}>
                    <Grid item xs={12} md={6}>
                        <Box className={`${Style['frame_Component']}`}>
                            <Box height={320} bgcolor={'#fff'} display={'flex'} alignItems={'center'} fontWeight={500} justifyContent={'center'}><span> Upload image here </span></Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box px={3}>
                            <Typography
                                variant="h5"
                                color={'#fff'}
                                mb={2}
                                noWrap>We make websites</Typography>
                            <Typography
                                color={'#fff'}
                                variant="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minima praesentium cum. Molestias, suscipit minima. Hic deserunt sunt mollitia quae dolore similique, porro inventore impedit obcaecati eius animi accusantium doloremque?</Typography>
                            <Typography><Button variant='contained' sx={{ mt: 3, borderRadius: 50, backgroundColor: '#3f3eed', textTransform: 'capitalize' }} >Explore more</Button></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ my: 5 }}>
                <Grid container colGap={2}>
                    <Grid item xs={12} md={6}>
                        <Box px={3}>
                            <Typography
                                variant="h5"
                                color={'#fff'}
                                mb={2}
                                noWrap>We make Logos</Typography>
                            <Typography
                                color={'#fff'}
                                variant="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minima praesentium cum. Molestias, suscipit minima. Hic deserunt sunt mollitia quae dolore similique, porro inventore impedit obcaecati eius animi accusantium doloremque?</Typography>
                            <Typography><Button variant='contained' sx={{ mt: 3, borderRadius: 50, backgroundColor: '#3f3eed', textTransform: 'capitalize' }} >Explore more</Button></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box className={`${Style['frame_Component']}`}>
                            <Box height={320} bgcolor={'#fff'} display={'flex'} alignItems={'center'} fontWeight={500} justifyContent={'center'}><span> Upload image here </span></Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
export default Home_services;