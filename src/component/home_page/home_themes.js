

import { Box, Button, Grid, Typography } from '@mui/material';
import Style from '../../assets/css/style_main.module.css'
const Home_themes = () => {
    return (
        <Box sx={{ my: 5 }}>
            <Typography className='text-center' color={'white'} fontSize={25} fontFamily={'Merienda'}>Our Themes</Typography>
            <Box sx={{ my: 5 }}>
                <Grid container colGap={2} rowGap={2}>
                    <Grid item xs={12} md={4} px={1}>
                        <Box className={`${Style['frame_Component']}`}>
                            <Box height={320} bgcolor={'#fff'} display={'flex'} alignItems={'center'} fontWeight={500} justifyContent={'center'}><span> Upload image here </span></Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} px={1}>
                        <Box className={`${Style['frame_Component']}`}>
                            <Box height={320} bgcolor={'#fff'} display={'flex'} alignItems={'center'} fontWeight={500} justifyContent={'center'}><span> Upload image here </span></Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} px={1}>
                        <Box className={`${Style['frame_Component']}`}>
                            <Box height={320} bgcolor={'#fff'} display={'flex'} alignItems={'center'} fontWeight={500} justifyContent={'center'}><span> Upload image here </span></Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} px={1}>
                        <Box className={`${Style['frame_Component']}`}>
                            <Box height={320} bgcolor={'#fff'} display={'flex'} alignItems={'center'} fontWeight={500} justifyContent={'center'}><span> Upload image here </span></Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} px={1}>
                        <Box className={`${Style['frame_Component']}`}>
                            <Box height={320} bgcolor={'#fff'} display={'flex'} alignItems={'center'} fontWeight={500} justifyContent={'center'}><span> Upload image here </span></Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} px={1}>
                        <Box className={`${Style['frame_Component']}`}>
                            <Box height={320} bgcolor={'#fff'} display={'flex'} alignItems={'center'} fontWeight={500} justifyContent={'center'}><span> Upload image here </span></Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
export default Home_themes;