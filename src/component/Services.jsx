import React from 'react';
import {
    Typography,
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    Button
} from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import ResponsiveText from './ResponsiveText';
import BackgroundImage from './BackGround.jpg';

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
    return (
        <Box sx={{
            position: 'relative',
            minHeight: '100vh',
            color: 'white',
            overflowX: 'hidden'
        }}>
            {/* Fixed Background with Overlay */}
            <Box sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: -2,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                }
            }} />

            {/* Header Component */}
            <Header />

            {/* Main Content Area */}
            <Box component="main" sx={{
                position: 'relative',
                zIndex: 1,
                pt: { xs: '80px', md: '20px' } // Responsive padding for header
            }}>
                <Container maxWidth="xl">
                    {/* Services Title */}
                    <Box sx={{
                        textAlign: 'center',
                        mb: { xs: 4, md: 8 },
                        px: 2
                    }}>
                        <Typography variant="h3" sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '3.5rem' },
                            lineHeight: 1.2
                        }}>
                            Providing best <br /> Services for client
                        </Typography>
                    </Box>

                    {/* Services Grid */}
                    <Grid container spacing={4} justifyContent="center" sx={{ px: 2, mb: { xs: 8, md: 12 } }}>
                        {services.map((service, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ display: 'flex',mb : 4 }}>
                                <Card
                                    sx={{
                                        bgcolor: '#1a1a1a',
                                        p: 2,
                                        borderRadius: 3,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 0 25px rgba(255, 255, 255, 0.5)',
                                        },
                                        height: '100%',
                                        width: '100%',
                                    }}
                                >
                                    <CardContent sx={{
                                        flexGrow: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Box>
                                            <Typography variant="h5" sx={{
                                                fontWeight: 600,
                                                mb: 2,
                                                color: 'white',
                                                fontSize: { xs: '1.2rem', md: '1.5rem' }
                                            }}>
                                                {service.title}
                                            </Typography>
                                            <Box component="ul" sx={{
                                                listStyle: 'none',
                                                pl: 0,
                                                mb: 4
                                            }}>
                                                {service.items.map((item, idx) => (
                                                    <Box
                                                        key={idx}
                                                        component="li"
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            mb: 1
                                                        }}
                                                    >
                                                        <Typography sx={{
                                                            mr: 1,
                                                            color: 'primary.main'
                                                        }}>
                                                            ➜
                                                        </Typography>
                                                        <Typography sx={{
                                                            color: 'white',
                                                            fontSize: { xs: '0.9rem', md: '1rem' }
                                                        }}>
                                                            {item}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                        <Button
                                            variant="text"
                                            component="a"
                                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=clickcoremedia09@gmail.com&su=${encodeURIComponent(`${service.title} Inquiry`)}&body=${encodeURIComponent(`Hello, I am interested in your ${service.title} services. Please contact me with more details.`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                color: 'white',
                                                borderBottom: '1px solid white',
                                                borderRadius: 0,
                                                alignSelf: 'flex-start',
                                                px: 0,
                                                '&:hover': {
                                                    borderBottom: '1px solid',
                                                    borderColor: 'primary.main',
                                                    color: 'primary.main',
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
                </Container>

                {/* Additional Components */}
                <ResponsiveText />
                <Footer />
            </Box>
        </Box>
    );
};

export default Services;