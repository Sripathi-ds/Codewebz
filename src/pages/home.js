
import Container from '@mui/material/Container';
import Home_banner from '../component/home_page/home_banner';
import Home_about from '../component/home_page/home_about';
import Home_services from '../component/home_page/home_services';
import Home_themes from '../component/home_page/home_themes';

const Home = () => {
    return (
        <Container>
            <Home_banner />
            <Home_about />
            <Home_services/>
            <Home_themes/>
        </Container>
    )
}
export default Home;