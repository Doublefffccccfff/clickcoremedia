import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../component/LogoBW.png'; // Adjust the path as necessary
const StaticMap = () => {
    const navigate = useNavigate();
    return (
        <div style={{ textAlign: 'center',backgroundColor: '#000', color: 'white', padding: '20px',height: '100vh', }}>
            <IconButton onClick={() => navigate('/')}>
                    <img src={Logo} alt="Logo" style={{ height: '400px' }} />
                </IconButton>
            <h2>Our Location - Nagpur</h2>
            

        </div>
    );
};

export default StaticMap;
