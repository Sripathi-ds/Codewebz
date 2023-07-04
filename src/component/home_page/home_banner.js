
import { Box, Button, Grid, Typography } from '@mui/material';
import Style from '../../assets/css/style_main.module.css'
const Home_banner = () => {
    return (
        <Box sx={{ mt: 3 }} height={'calc(100vh - 110px)'} display={'flex'} alignItems={'center'}>
            <Box width={'100%'}>
                <Typography className='text-center' color={'white'} fontSize={25} fontFamily={'Merienda'}>Order your website , Start your journey from today.</Typography>
                <Box sx={{ mt: 5 }}>
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
                                    noWrap>Place your order ! We make your website</Typography>
                                <Typography
                                    color={'#fff'}
                                    variant="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minima praesentium cum. Molestias, suscipit minima. Hic deserunt sunt mollitia quae dolore similique, porro inventore impedit obcaecati eius animi accusantium doloremque?</Typography>
                                <Typography><Button variant='contained' sx={{ mt: 3, borderRadius: 50, backgroundColor: '#3f3eed', textTransform: 'capitalize' }} >Order Now</Button></Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );

}
export default Home_banner;