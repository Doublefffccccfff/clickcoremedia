import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../component/LogoBW.png'; // Adjust the path as necessary
import Header from './Header'; // Import the shared Header component
import BackgroundImage from './BackGround.jpg'; // Adjust the path to your background image
const StaticMap = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            textAlign: 'center', backgroundColor: '#000', color: 'white', padding: '20px', height: '100vh', backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
                zIndex: 1,
            },
            '& > *': {
                position: 'relative',
                zIndex: 2,
            }
        }}>

            <Header />

            <h2>Our Location - Nagpur</h2>


        </div>
    );
};

export default StaticMap;
