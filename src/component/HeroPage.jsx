import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import Header from './Header'; // Import the new Header component
import ResponsiveText from './ResponsiveText';
import Footer from './Footer';

import video1 from '../component/hero.mp4';
import video2 from '../component/hero2.mp4';
import video3 from '../component/hero3.mp4';
import menuVideo from '../component/menuSection.mp4';

const videos = [video1, video2, video3];

function HeroPage() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
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

            {/* Use the new Header component */}
            <Header />

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
                    <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '4rem' }, lineHeight: 1.1, ml: { md: '-190px' }}}>
                        Building Bridges between , <br />BRANDS and AUDIENCES.
                    </Typography>
                </Container>
            </Box>

            {/* Description Section */}
            <Box sx={{ bgcolor: '#e0e0e0', py: { xs: 3, md: 6 } }}>
                <Container maxWidth="md">
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '1rem', md: '2.5rem' },
                            fontWeight: 700,
                            lineHeight: 2,
                            color: 'black',
                            textAlign: 'left',
                            p: 4
                        }}
                    >
                        ClickCore Media creates breakthrough ideas that turn followers into fanatics. We connect brands to the people, places, and platforms shaping culture. We discover first, we dive deeper, and we inspire people to feel something real. If you're into it, we're already on it.
                    </Typography>
                </Container>
            </Box>

            {/* Scroll Down Section with Same Background */}
            <Box sx={{ position: 'relative', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
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