import { Box, Grid, Typography } from '@mui/material';

import Style from '../assets/css/home.module.css';
import Container from '@mui/material/Container';



const Home = () => {
    return (
        <Container>
            <Box sx={{ mt: 3 }} height={'100vh'}>
                <Typography className='text-center' color={'white'} fontSize={25} fontFamily={'Merienda'}>Order your website , Start your journey from today</Typography>
                <Box sx={{mt:3}}>
                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            
                        </Grid>
                        <Grid xs={6}>
                        abc
                        </Grid>
                    </Grid>
                </Box>

            </Box>



        </Container>
    )
}
export default Home;