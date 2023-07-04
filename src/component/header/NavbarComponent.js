import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Style from '../../assets/css/header/Navbar.module.css'
import { Link } from 'react-router-dom';


const NavPage = [{ name: 'All Themes', navLink: '/AllThemes' },
{ name: 'About us', navLink: '/about/' },
{ name: 'Services', navLink: '/services/' },
{ name: 'Order Now', navLink: '/order/' },
{ name: 'Contact us', navLink: '/contact/' },
]


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Container>
            <AppBar position="static" sx={{backgroundColor:'#fff' , marginTop:'20px' , borderRadius:'50px'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , color:'#000'}} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Merienda',
                                fontWeight: 700,
                                color: '#000',
                                textDecoration: 'none',
                            }}
                        >
                            Company
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="#000"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {NavPage.map(({ name, navLink }) => (
                                    <MenuItem key={name} onClick={handleCloseNavMenu}  >
                                        <Link textAlign="center" to={navLink}> {name}</Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 , color:'#000'}} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'Merienda',
                                fontWeight: 700,
                                color: '#000',
                                textDecoration: 'none',
                            }}
                        >
                            Company
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                            {NavPage.map(({ name, navLink }) => (
                                <Link
                                    key={name}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, px: 3, display: 'block' }}
                                    to={navLink}
                                    underline='none'
                                    color='#000'
                                    className={`${Style['nav_link']}`}
                                >
                                    {name}
                                </Link>
                            ))}
                        </Box>
                        <Box >
                            <Button variant='contained' sx={{borderRadius:'50px', boxShadow:'unset'}} backgroundColor={'#3f3eed'}>Log in / Sign up</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Container>
    );}
export default ResponsiveAppBar;