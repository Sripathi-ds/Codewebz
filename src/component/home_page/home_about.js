
import { Box, Button, Grid, Typography } from '@mui/material';
import Style from '../../assets/css/style_main.module.css'
import Home_abt_img from '../../assets/images/home_abt_img.png'
const Home_about = () => {
    return (

        <Box sx={{ my: 5 }}>
            <Grid container colGap={2}>
                <Grid item xs={12} md={6}>
                    <Box px={3}>
                        <Typography
                            variant="h5"
                            color={'#fff'}
                            mb={2}
                            noWrap>What we do ? </Typography>
                        <Typography
                            color={'#fff'}
                            variant="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minima praesentium cum. Molestias, suscipit minima. Hic deserunt sunt mollitia quae dolore similique, porro inventore impedit obcaecati eius animi accusantium doloremque?</Typography>
                        <Typography>
                            <Button variant='contained' sx={{ mt: 3, borderRadius: 50, backgroundColor: '#3f3eed', textTransform: 'capitalize' }} >Learn more</Button></Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} >
                    <Box px={3}><img className={`${Style['home_abt_img']}`} src={Home_abt_img}></img></Box>
                </Grid>
            </Grid>
        </Box>


    );

}
export default Home_about;