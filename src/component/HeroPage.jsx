import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, Typography, Box, Container, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import video1 from '../component/hero.mp4';
import video2 from '../component/hero2.mp4';
import video3 from '../component/hero3.mp4';
import menuVideo from '../component/menuSection.mp4';

const videos = [video1, video2, video3];

function HeroPage() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const videoRef = useRef(null);

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
                <Toolbar sx={{ justifyContent: 'space-around', gap: 4, mt: '3rem' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
                        Click Core
                    </Typography>

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
                    textAlign: 'center',
                    px: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '2.5rem', md: '5rem' }, lineHeight: 1.1 }}>
                        Building Brigdes between<br />BRANDS and AUDIENCES.
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', mt: 5 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
                            Creative Solutions for Modern Brands
                        </Typography>

                        <Typography variant="body1" sx={{ maxWidth: '500px', fontSize: '1.1rem', mt: { xs: 3, md: 0 } }}>
                            We help businesses at critical inflection points define, design and build new futures.
                        </Typography>
                    </Box>
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
                            p: 5,
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '2.5rem', mb: 4, color: 'black' }}>
                            Click Core
                        </Typography>

                        <Box>
                            {['Work', 'Services', 'Locations', 'Careers', 'Contact'].map((item) => (
                                <Box key={item} sx={{ display: 'flex', alignItems: 'center', mb: 3, color: 'black' }}>
                                    <Typography sx={{ fontSize: '2rem', fontWeight: 500 }}>{item}</Typography>
                                    <Typography sx={{ fontSize: '2rem', ml: 1 }}>→</Typography>
                                </Box>
                            ))}
                        </Box>

                        {/* Social Icons */}
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Box sx={{ bgcolor: 'white', color: '#0000FF', px: 1.2, py: 0.5, borderRadius: '5px' }}>📸</Box>
                            <Box sx={{ bgcolor: 'white', color: '#0000FF', px: 1.2, py: 0.5, borderRadius: '5px' }}>in</Box>
                            <Box sx={{ bgcolor: 'white', color: '#0000FF', px: 1.2, py: 0.5, borderRadius: '5px' }}>𝕏</Box>
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
                                height: '800px',
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
                        }}
                    >
                        Click Core creates breakthrough ideas that turn followers into fanatics. Connecting brands to the people, places and properties changing culture at large. We know first. We go deeper. And we inspire people to feel something real. As part of WME Group, we have ins to the next everything. If you’re into it, we’re all over it.
                    </Typography>
                </Container>
            </Box>
            {/* Scroll Down Section with Same Background */}
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    


                }}
            >
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
                        sx={{
                            border: '2px solidrgb(0, 0, 0)',
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
                        Conctact Us ▶
                    </Box>

                    <Box
                        sx={{
                            border: '2px solidrgb(255, 255, 255)',
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
    );
}

export default HeroPage;
