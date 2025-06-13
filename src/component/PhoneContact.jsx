import React, { useState } from 'react';
import { IconButton, Box, Typography, Collapse } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const PhoneContact = () => {
    const [showNumbers, setShowNumbers] = useState(false);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IconButton
                onClick={() => setShowNumbers(!showNumbers)}
                sx={{
                    bgcolor: 'white',
                    color: 'black',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        background: 'linear-gradient(45deg, #4caf50, #2e7d32)', // Phone color gradient
                        color: 'white',
                        transform: 'scale(1.1)',
                        boxShadow: '0 0 10px #4caf50',
                    }
                }}
            >
                <PhoneIcon />
            </IconButton>

            <Collapse in={showNumbers}>
                <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography
                        component="a"
                        href="tel:+919876543210"
                        sx={{
                            color: 'white',
                            textDecoration: 'none',
                            backgroundColor: '#333',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            '&:hover': {
                                backgroundColor: '#555',
                                cursor: 'pointer'
                            }
                        }}
                    >
                        Call: +91 9876543210
                    </Typography>
                    <Typography
                        component="a"
                        href="tel:+911234567890"
                        sx={{
                            color: 'white',
                            textDecoration: 'none',
                            backgroundColor: '#333',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            '&:hover': {
                                backgroundColor: '#555',
                                cursor: 'pointer'
                            }
                        }}
                    >
                        Call: +91 1234567890
                    </Typography>
                </Box>
            </Collapse>
        </Box>
    );
};

export default PhoneContact;
