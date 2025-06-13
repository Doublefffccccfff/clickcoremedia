import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Logo from '../component/LogoBW.png';
const Careers = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                bgcolor: 'black',
                color: 'white',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                
            }}
        >
            
            <Box sx={{mt: -10 }}>
                <IconButton onClick={() => navigate('/')}>
                    <img src={Logo} alt="Logo" style={{ height: '400px' }} />
                </IconButton>
            </Box>
            {/* Animated Icon */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ marginBottom: '20px' }}
            >
                <WorkOutlineIcon sx={{ fontSize: 100, color: 'orangered' }} />
            </motion.div>

            {/* Message */}
            <Typography variant="h4" sx={{ mb: 2 }}>
                No Openings Currently
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 400, mb: 4 }}>
                We're not hiring right now, but please check back soon. You can also reach out to us via our contact page!
            </Typography>

            {/* Back to Home Button */}
            <Button
                variant="contained"
                sx={{
                   background: 'linear-gradient(45deg,rgb(245, 73, 30),rgb(28, 12, 3))',
                    '&:hover': {
                        background: 'linear-gradient(45deg,rgb(206, 62, 26),rgb(28, 12, 3))',
                        color: 'white',
                        transform: 'scale(1.1)',
                        boxShadow: '0 0 10pxrgb(66, 78, 130)',
                    }
                }}

                onClick={() => navigate('/')}
            >
                Back to Home
            </Button>
        </Box>
    );
};

export default Careers;
