import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import LogoImage from '../assets/img/logo512.png'
import { NavLink } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavbarScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: 0,
        sx: {
            left: !trigger ? '5%' : '0px',
            right: !trigger ? '5%' : '0px',
            width: !trigger ? '90%' : '100%',
            top: !trigger ? '20px' : 0,
            transition: '0.3s',
            borderRadius: !trigger ? '60px' : 0,
            '.MuiToolbar-root img': {
                filter: !trigger ? 'invert(1)' : 'invert(0)'
            },
            backgroundColor: !trigger ? 'primary' : '#fff',
            color: !trigger ? '#fff' : '#000',
            '.MuiToolbar-root': {
                paddingLeft: !trigger ? 2 : 3,
                paddingRight: !trigger ? 2 : 3,
            },
            '@media(max-width:600px)': {
                left: '0px',
                right: '0px',
                width: '100%',
                borderRadius: 0,
                top: 0,
            }

        }
    });
}


export default function ElevateAppBar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <NavbarScroll {...props}>
                <AppBar>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <img src={LogoImage} alt="" style={{
                            width: '50px', height: '50px', marginRight: '10px',
                        }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            CodeWebz
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'inline-flex', justifyContent: 'end ', fontFamily: 'inherit' } }}>
                            <NavLink
                                onClick={handleCloseNavMenu}
                                style={{ marginLeft: '5px', marginRight: '5px', color: 'inherit', textDecoration: 'none', fontSize: '14px', display: 'block' }}
                            >
                                All themes
                            </NavLink>
                            <NavLink
                                onClick={handleCloseNavMenu}
                                style={{ marginLeft: '5px', marginRight: '5px', color: 'inherit', textDecoration: 'none', fontSize: '14px', display: 'block' }}
                            >
                                About us
                            </NavLink>
                            <NavLink
                                onClick={handleCloseNavMenu}
                                style={{ marginLeft: '5px', marginRight: '5px', color: 'inherit', textDecoration: 'none', fontSize: '14px', display: 'block' }}
                            >
                                Contact us
                            </NavLink>
                            <NavLink
                                onClick={handleCloseNavMenu}
                                style={{ marginLeft: '5px', marginRight: '5px', color: 'inherit', textDecoration: 'none', fontSize: '14px', display: 'block' }}
                            >

                            </NavLink>
                            <NavLink
                                onClick={handleCloseNavMenu}
                                style={{ marginLeft: '5px', marginRight: '5px', color: 'inherit', textDecoration: 'none', fontSize: '14px', display: 'block' }}
                            >
                                Services
                            </NavLink>
                        </Box>

                        <Box sx={{ display: { xs: 'inline-flex', md: 'none' } }} >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
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
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box> */}
                    </Toolbar>
                </AppBar>
            </NavbarScroll >
        </>
    );
}
