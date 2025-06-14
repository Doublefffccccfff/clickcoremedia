import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

import iconBandW from '../component/LogoTrans.png';
import iconCC from '../component/ClickCore.png';
import menuVideo from '../component/menuSection.mp4';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // 👈 Track route changes

    const menuItems = [
        { name: 'Services', path: '/services' },
        { name: 'Locations', path: '/locations' },
        { name: 'Careers', path: '/careers' },
    ];

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    // 👇 Automatically close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <>
            {/* Navbar */}
            <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none', }}>
                <Toolbar sx={{ justifyContent: 'space-between', gap: 4, mt: '-1rem' }}>
                    <Box
                        onClick={() => navigate('/')}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            '&:hover': {
                                cursor: 'pointer',
                                 
                            },
                        }}
                    >
                        <img
                            src={iconBandW}
                            alt="Click Core Logo"
                            style={{ height: '200px', objectFit: 'contain' }}
                        />
                    </Box>


                    <IconButton onClick={handleMenuToggle} sx={{ color: 'white' }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Full-Screen Menu Overlay */}
            {menuOpen && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        zIndex: 9999,
                    }}
                >
                    {/* Left Section (White) */}
                    <Box
                        sx={{
                            flex: 1,
                            bgcolor: 'rgb(255, 255, 255)',
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 5,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={iconCC}
                                alt="Click Core Logo"
                                style={{ height: '200px', objectFit: 'contain', }}
                            />
                        </Box>

                        <Box>
                            {menuItems.map((item) => (
                                <Box
                                    key={item.name}
                                    onClick={() => {
                                        navigate(item.path);
                                    }}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 3,
                                        color: 'black',
                                        '&:hover': {
                                            cursor: 'pointer',
                                        }
                                    }}
                                >
                                    <Typography sx={{ fontSize: '2rem', fontWeight: 500 }}>
                                        {item.name}
                                    </Typography>
                                    <Typography sx={{ fontSize: '2rem', ml: 1 }}>→</Typography>
                                </Box>
                            ))}

                            <Box
                                onClick={() => {
                                    setMenuOpen(false);
                                    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mb: 3,
                                    color: 'black',
                                    '&:hover': {
                                        cursor: 'pointer',
                                    },
                                }}
                            >
                                <Typography sx={{ fontSize: '2rem', fontWeight: 500 }}>Contact</Typography>
                                <Typography sx={{ fontSize: '2rem', ml: 1 }}>→</Typography>
                            </Box>
                        </Box>

                        {/* Social Icons */}
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <IconButton
                                component="a"
                                href="https://www.instagram.com/clickcoremedia/?igsh=MWtidW45ejZ0NGY4Yw%3D%3D#"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    bgcolor: 'white',
                                    color: 'black',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
                                        color: 'white',
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 0 10px #fa7e1e',
                                    }
                                }}
                            >
                                <InstagramIcon />
                            </IconButton>

                            <IconButton
                                sx={{
                                    bgcolor: 'white',
                                    color: 'black',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #ff0000, #cc0000, #990000)',
                                        color: 'white',
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 0 10px #ff0000',
                                    }
                                }}
                            >
                                <YouTubeIcon />
                            </IconButton>

                            <IconButton
                                component="a"
                                href="https://wa.me/918766959148?text=Hello%20I%20am%20interested%20in%20your%20services"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    bgcolor: 'white',
                                    color: 'black',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #25D366, #128C7E)',
                                        color: 'white',
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 0 10px #25D366',
                                    }
                                }}
                            >
                                <WhatsAppIcon />
                            </IconButton>

                            <IconButton
                                component="a"
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=clickcoremedia09@gmail.com&su=Service%20Inquiry&body=Hello,%20I%20am%20interested%20in%20your%20services.%20Please%20contact%20me."
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    bgcolor: 'white',
                                    color: 'black',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        background: 'linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335)',
                                        color: 'white',
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 0 10px #ea4335',
                                    }
                                }}
                            >
                                <EmailIcon />
                            </IconButton>
                        </Box>
                    </Box>

                    {/* Right Section (Black) */}
                    <Box
                        sx={{
                            flex: 1,
                            bgcolor: 'black',
                            color: 'white',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 3,
                        }}
                    >
                        {/* Close Button */}
                        <IconButton
                            onClick={handleMenuClose}
                            sx={{
                                position: 'absolute',
                                top: 20,
                                right: 20,
                                color: 'white',
                            }}
                        >
                            <CloseIcon />
                        </IconButton>

                        {/* Menu Video */}
                        <video
                            autoPlay
                            loop
                            muted
                            style={{
                                height: '600px',
                                width: 'auto',
                                borderRadius: '20px',
                                marginLeft: '0px'
                            }}
                        >
                            <source src={menuVideo} type="video/mp4" />
                        </video>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default Header;
