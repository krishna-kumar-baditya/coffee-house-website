import { Box, Typography } from "@mui/material";
import "./MenuFeatured.css";
import Grid from "@mui/material/Grid2";

export default function MenuFeatured() {
    return (
        <>
            <section className="menu-featured">
                <Box className="featured-menu-container">
                    <Box className="featured-menu-title">
                        <Typography variant="h4">OUR POPULAR MENU</Typography>
                    </Box>
                    <Box className='featured-menu-content'>
                        <Grid container spacing={{sm:0,md:8}} rowGap={{xs:7,sm:2,md:2}}>
                            <Grid size={{md:12,lg:6}} className='grid-wrapper'>
                                <Box className="menu-content-section">
                                    <Box className="menu-icon">
                                        <img src="./images/coffee-1.png" alt="icon" />
                                    </Box>
                                    <Box className="menu-content">
                                        <Typography variant="body1">
                                            Grilled Cheese Sandwich
                                        </Typography>
                                        <Typography variant="body1">
                                            It is produced by grinding roasted
                                            coffee beans, then boiling them.
                                        </Typography>
                                    </Box>
                                    <Box className='menu-price'>
                                        <Typography variant="body1">$10.00</Typography>
                                    </Box>
                                </Box>
                                <Box className="menu-content-section">
                                    <Box className="menu-icon">
                                        <img src="./images/coffee-2.png" alt="icon" />
                                    </Box>
                                    <Box className="menu-content">
                                        <Typography variant="body1">
                                            Grilled Cheese Sandwich
                                        </Typography>
                                        <Typography variant="body1">
                                            It is produced by grinding roasted
                                            coffee beans, then boiling them.
                                        </Typography>
                                    </Box>
                                    <Box className='menu-price'>
                                        <Typography variant="body1">$10.00</Typography>
                                    </Box>
                                </Box>
                                <Box className="menu-content-section">
                                    <Box className="menu-icon">
                                        <img src="./images/coffee-3.png" alt="icon" />
                                    </Box>
                                    <Box className="menu-content">
                                        <Typography variant="body1">
                                            Grilled Cheese Sandwich
                                        </Typography>
                                        <Typography variant="body1">
                                            It is produced by grinding roasted
                                            coffee beans, then boiling them.
                                        </Typography>
                                    </Box>
                                    <Box className='menu-price'>
                                        <Typography variant="body1">$10.00</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={{md:12,lg:6}} className='grid-wrapper'>
                                <Box className="menu-content-section">
                                    <Box className="menu-icon">
                                        <img src="./images/coffee-4.png" alt="icon" />
                                    </Box>
                                    <Box className="menu-content">
                                        <Typography variant="body1">
                                            Grilled Cheese Sandwich
                                        </Typography>
                                        <Typography variant="body1">
                                            It is produced by grinding roasted
                                            coffee beans, then boiling them.
                                        </Typography>
                                    </Box>
                                    <Box className='menu-price'>
                                        <Typography variant="body1">$10.00</Typography>
                                    </Box>

                                </Box>
                                <Box className="menu-content-section">
                                    <Box className="menu-icon">
                                        <img src="./images/coffee-5.png" alt="icon" />
                                    </Box>
                                    <Box className="menu-content">
                                        <Typography variant="body1">
                                            Grilled Cheese Sandwich
                                        </Typography>
                                        <Typography variant="body1">
                                            It is produced by grinding roasted
                                            coffee beans, then boiling them.
                                        </Typography>
                                    </Box>
                                    <Box className='menu-price'>
                                        <Typography variant="body1">$10.00</Typography>
                                    </Box>

                                </Box>
                                <Box className="menu-content-section">
                                    <Box className="menu-icon">
                                        <img src="./images/coffee-6.png" alt="icon" />
                                    </Box>
                                    <Box className="menu-content">
                                        <Typography variant="body1">
                                            Grilled Cheese Sandwich
                                        </Typography>
                                        <Typography variant="body1">
                                            It is produced by grinding roasted
                                            coffee beans, then boiling them.
                                        </Typography>
                                    </Box>
                                    <Box className='menu-price'>
                                        <Typography variant="body1">$10.00</Typography>
                                    </Box>

                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </section>
        </>
    );
}
