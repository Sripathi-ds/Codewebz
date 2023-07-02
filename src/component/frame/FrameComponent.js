import { Box, Hidden } from '@mui/material'
import Style from '../../assets/css/frame/FrameComponent.module.css'

const FrameComponent = () =>{
    return(
        <Box className={`${Style['frame_component']}`} borderRadius={3} border={3} overflow={'hidden'} borderColor={'#fff'} bgcolor={'#fff'}>
            <Box className={`${Style['frame_fill']}`} ></Box>
        </Box>
    )
}
export default FrameComponent