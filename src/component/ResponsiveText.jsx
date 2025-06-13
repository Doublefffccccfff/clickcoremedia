import React from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';

function ResponsiveText() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ bgcolor: '#e0e0e0', py: { xs: 3, md: 6 } }}>
            <Container>
                {isSmallScreen ? (
                    // For small screens: Allow wrapping naturally
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '2rem', md: '4rem' },
                            lineHeight: 1.2,
                            color: 'black',
                            textAlign: 'center',
                            p: 4,
                        }}
                    >
                        Innovation moves us. <br /> Let us move you.
                    </Typography>
                ) : (
                    // For large screens: No wrap (force single line)
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '2rem', md: '4rem' },
                            lineHeight: 1.2,
                            color: 'black',
                            textAlign: 'center',
                            p: 4,
                            whiteSpace: 'nowrap', // Prevent wrapping
                        }}
                    >
                        Innovation moves us. / Let us move you.
                    </Typography>
                )}
            </Container>
        </Box>
    );
}

export default ResponsiveText;
