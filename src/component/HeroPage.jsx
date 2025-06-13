import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, Typography, Box, Container, IconButton, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import video1 from '../component/hero.mp4';
import video2 from '../component/hero2.mp4';
import video3 from '../component/hero3.mp4';
import menuVideo from '../component/menuSection.mp4';
import iconBandW from '../component/LogoTrans.png';
import iconCC from '../component/ClickCore.png';
import ResponsiveText from './ResponsiveText';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';



const videos = [video1, video2, video3];

function HeroPage() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNumbers, setShowNumbers] = useState(false);
    const videoRef = useRef(null);
    const menuItems = [
        { name: 'Services', path: '/services' },
        { name: 'Locations', path: '/locations' }, // Add these pages later if needed
        { name: 'Careers', path: '/careers' },
    ];
    const navigate = useNavigate();

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, [currentVideoIndex]);

    const handleVideoLoaded = () => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log('Play was prevented:', error);
            });
        }
    };

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    return (
        <Box sx={{ position: 'relative', minHeight: '100vh' }}>
            {/* Video Background */}
            <video
                ref={videoRef}
                key={currentVideoIndex}
                autoPlay
                muted
                onEnded={handleVideoEnd}
                onLoadedData={handleVideoLoaded}
                style={{
                    position: 'fixed',
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                    top: 0,
                    left: 0,
                    zIndex: -2,
                }}
            >
                <source src={videos[currentVideoIndex]} type="video/mp4" />
            </video>

            {/* Tint Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.5)',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
            />

            {/* Navbar */}
            <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
                <Toolbar sx={{ justifyContent: 'space-between', gap: 4, mt: '-1rem' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={iconBandW}
                            alt="Click Core Logo"
                            style={{ height: '200px', objectFit: 'contain' }} // Adjust size as needed
                        />
                    </Box>

                    <IconButton onClick={handleMenuToggle} sx={{ color: 'white' }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    textAlign: 'left',
                    
                    mt: { xs: -15, md: -18 }
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '4rem' }, lineHeight: 1.1,ml: {  md: '-190px' }}}>
                        Building Bridges between , <br />BRANDS and AUDIENCES.
                    </Typography>

                    
                    
                </Container>
            </Box>

            {/* Full-Screen Menu Overlay */}
            {menuOpen && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        zIndex: 9999,
                    }}
                >
                    {/* Left Section (Blue) */}
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
                                style={{ height: '200px', objectFit: 'contain' }} // Adjust size as needed
                            />
                        </Box>

                        <Box>
                            {menuItems.map((item) => (
                                <Box key={item.name} onClick={() => navigate(item.path)} sx={{
                                    display: 'flex', alignItems: 'center', mb: 3, color: 'black', '&:hover': {
                                        cursor: 'pointer',
                                    }
                                }}>
                                    <Typography sx={{ fontSize: '2rem', fontWeight: 500 }}>{item.name}</Typography>
                                    <Typography sx={{ fontSize: '2rem', ml: 1 }}>→</Typography>
                                </Box>
                            ))}
                            <Box onClick={() => {
                                handleMenuClose();
                                document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                            }} sx={{
                                display: 'flex', alignItems: 'center', mb: 3, color: 'black', '&:hover': {
                                    cursor: 'pointer',
                                },
                            }}>
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




                            <IconButton sx={{
                                bgcolor: 'white',
                                color: 'black',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #ff0000, #cc0000, #990000)', // YouTube gradient
                                    color: 'white',
                                    transform: 'scale(1.1)',
                                    boxShadow: '0 0 10px #ff0000',
                                }
                            }}>
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
                                        background: 'linear-gradient(45deg, #25D366, #128C7E)', // WhatsApp gradient
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
                                        background: 'linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335)', // Gmail gradient
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

            {/* Description Section */}
            <Box sx={{ bgcolor: '#e0e0e0', py: { xs: 3, md: 6 } }}>
                <Container maxWidth="md">
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.5rem' },
                            lineHeight: 1.8,
                            color: 'black',
                            textAlign: 'left',
                            p: 4
                        }}
                    >
                        ClickCore Media creates breakthrough ideas that turn followers into fanatics. We connect brands to the people, places, and platforms shaping culture. We discover first, we dive deeper, and we inspire people to feel something real. If you’re into it, we’re already on it.
                    </Typography>
                </Container>
            </Box>

            {/* Scroll Down Section with Same Background */}
            <Box sx={{ position: 'relative', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                {/* Background Video */}
                {/* <video
                    ref={videoRef}
                    key={currentVideoIndex}
                    autoPlay
                    muted
                    loop
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        top: 0,
                        left: 0,
                        zIndex: -2,
                    }}
                >
                    <source src={videos[currentVideoIndex]} type="video/mp4" />
                </video> */}

                {/* Tint Overlay */}
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        bgcolor: 'rgba(0, 0, 0, 0.5)',
                        top: 0,
                        left: 0,
                        zIndex: -1,
                    }}
                />

                {/* Content */}
                <Box>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 'bold',
                            color: 'white',
                            fontSize: { xs: '3rem', md: '5rem' },
                            mb: 4,
                        }}
                    >
                        Obsess <br /> w / us
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box
                            onClick={() => {
                                document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            sx={{

                                borderRadius: '30px',
                                px: 4,
                                py: 1.5,
                                cursor: 'pointer',
                                color: 'white',
                                fontWeight: 'bold',
                                transition: 'all 0.3s',
                                '&:hover': { bgcolor: '#0000FF', color: 'white' },
                            }}
                        >
                            Contact Us ▶
                        </Box>

                        <Box
                            sx={{
                                border: '1px solid rgb(255, 255, 255)',
                                borderRadius: '30px',
                                px: 4,
                                py: 1.5,
                                cursor: 'pointer',
                                color: 'white',
                                fontWeight: 'bold',
                                transition: 'all 0.3s',
                                '&:hover': { bgcolor: '#0000FF', color: 'white' },
                            }}
                        >
                            View Work
                        </Box>
                    </Box>
                </Box>
            </Box>
            <ResponsiveText />
            <Footer />

        </Box>
    );
}

export default HeroPage;