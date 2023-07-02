import { Box, Grid, Typography } from '@mui/material';
import FrameComponent from './frame/FrameComponent';
import Container from '@mui/material/Container';





const Home = () => {
    return (
        <Container>
            <Box sx={{ mt: 3 }} height={'calc(100vh - 110px)'} display={'flex'} alignItems={'center'}>
                <Box width={'100%'}>
                    <Typography className='text-center' color={'white'} fontSize={25} fontFamily={'Merienda'}>Order your website , Start your journey from today</Typography>
                    <Box sx={{ mt: 5 }}>
                        <Grid container colGap={2}>
                            <Grid item xs={12} md={6}>
                                <FrameComponent />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FrameComponent />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Box>



        </Container>
    )
}
export default Home;