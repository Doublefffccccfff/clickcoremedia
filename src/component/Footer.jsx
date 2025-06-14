import React from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Logo from '../component/LogoTrans.png';

function Footer() {
    return (
        <Box id='footer' sx={{ bgcolor: 'black', color: 'white', py: 6 }}>
            <Container>
                <Grid
                    container
                    rowSpacing={{ xs: 4, md: 0 }}
                    columnSpacing={{ xs: 0, md: 60 }}
                    sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' }
                    }}
                >
                    {/* Left Section */}
                    <Grid item xs={12} md={7}>
                        <Box mb={2}>
                            <img src={Logo} alt="ClickCore" style={{ height: '150px' }} />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
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







                        </Box>
                    </Grid>

                    {/* Right Section */}
                    <Grid item xs={12} md={5} sx={{mb:-2}}>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                            Contact Us
                        </Typography>
                        <Typography sx={{ mb: 1 }}>+91 8788523671</Typography>
                        <Typography sx={{ mb: 1 }}>+91 8769959148</Typography>

                        <Typography sx={{ mb: 1 }}>
                            Pardi, Nagpur, Maharashtra <br /> 440035
                        </Typography>

                    </Grid>
                </Grid>

                {/* Divider */}
                <Box
                    sx={{
                        borderTop: '1px solid gray',
                        mt: 5,
                        pt: 2,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: { xs: 'center', md: 'left' },
                        gap: 2
                    }}
                >
                    <Typography>Copyright © 2025 Click Core</Typography>
                    <Typography
                        component="a"
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=clickcoremedia09@gmail.com&su=Service%20Inquiry&body=Hello,%20I%20am%20interested%20in%20your%20services.%20Please%20contact%20me."
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: 'white',
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'underline',
                                color: 'orangered'
                            }
                        }}
                    >
                        clickcoremedia09@gmail.com
                    </Typography>


                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
