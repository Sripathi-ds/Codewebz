import { Box, Button, Grid, Typography } from '@mui/material';
import FrameComponent from '../component/frame/FrameComponent';
import Container from '@mui/material/Container';

const Home = () => {
    return (
        <Container>
            <Box sx={{ mt: 3 }} height={'calc(100vh - 110px)'} display={'flex'} alignItems={'center'}>
                <Box width={'100%'}>
                    <Typography className='text-center' color={'white'} fontSize={25} fontFamily={'Merienda'}>Order your website , Start your journey from today.</Typography>
                    <Box sx={{ mt: 5 }}>
                        <Grid container colGap={2}>
                            <Grid item xs={12} md={6}>
                                <Box px={3}>
                                    <FrameComponent />
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
                                    <Typography><Button variant='contained' sx={{ mt: 3 , borderRadius:50 ,  backgroundColor: '#3f3eed' , textTransform: 'capitalize'}} >Order Now</Button></Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Box>



        </Container>
    )
}
export default Home;