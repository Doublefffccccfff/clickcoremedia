import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Modal, Backdrop, Fade, IconButton, TextField } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import Logo from '../component/LogoBW.png'; // Adjust the path as necessary
import Footer from './Footer'; // Assuming you have a Footer component
import ResponsiveText from './ResponsiveText'; // Assuming you have a ResponsiveText component
const services = [
    {
        title: 'Digital Marketing',
        items: [
            'PPC Marketing',
            'Social Media Management',
            'Search Engine Marketing (SEM)',
            'Email Marketing',
            'Content Marketing',
            'Influencer Marketing',
        ],
    },
    {
        title: 'Web Development',
        items: [
            'Website Design and Development',
            'Landing Pages',
            'Full Stack Development',
            'Search Engine Optimization (SEO)',
            'Website Maintenance & Support',
        ],
    },
    {
        title: 'Social Media Marketing',
        items: [
            'Facebook Campaign',
            'Instagram Advertising',
            'Content Marketing',
            'Influencer Marketing',
            'Social Media Strategy',
            'Social Media Advertising',
            'Social Media Content Creation',
        ],
    },
    {
        title: 'Photo Video Production',
        items: [
            'Product Photography',
            'Food Photography',
            'Portrait Photography',
            'Architectural Photography',
            'Event Videography',
            'Promotional Videos',
        ],
    },
];

const Services = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const handleOpen = (serviceTitle) => {
        setSelectedService(serviceTitle);
        setOpen(true);
    };



    return (
        <Box sx={{ bgcolor: '#000', minHeight: '100vh', py: 8, color: 'white' }}>
            <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
                <IconButton onClick={() => navigate('/')}>
                    <img src={Logo} alt="Logo" style={{ height: '150px' }} />
                </IconButton>
            </Box>

            <Box sx={{ textAlign: 'center', mb: 6 }}>
                {/* Text for Large Screens */}
                <Typography variant="h3" sx={{ fontWeight: 700, display: { xs: 'none', md: 'block' } }}>
                    Providing best <br /> Services for client
                </Typography>

                {/* Text for Small Screens */}
                <Typography variant="h4" sx={{ fontWeight: 700, display: { xs: 'block', md: 'none' },ml: 2 }}>
                    
                </Typography>
            </Box>
            <Grid container spacing={4} justifyContent="center" sx={{ py: 10 }}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card
                            sx={{
                                bgcolor: '#1a1a1a',
                                p: 2,
                                borderRadius: 3,
                                minHeight: '350px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    boxShadow: '0 0 25px rgba(255, 255, 255, 0.5)',
                                },
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
                                    {service.title}
                                </Typography>
                                <Box component="ul" sx={{ listStyle: 'none', pl: 0, mb: 4 }}>
                                    {service.items.map((item, idx) => (
                                        <Box key={idx} component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <Typography sx={{ mr: 1, color: 'blue' }}>➜</Typography>
                                            <Typography sx={{ color: 'white' }}>{item}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                                <Button
                                    variant="text"
                                    component="a"
                                    href="https://forms.gle/Sev2W2ydMoFE5Ggw6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: 'white',
                                        borderBottom: '1px solid white',
                                        borderRadius: 0,
                                        '&:hover': {
                                            borderBottom: '1px solid orangered',
                                            color: 'orangered',
                                            background: 'none',
                                        },
                                    }}
                                >
                                    Contact Now →
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                ))}

            </Grid>

            <ResponsiveText />
            <Footer />
        </Box>
    );
};

export default Services;
