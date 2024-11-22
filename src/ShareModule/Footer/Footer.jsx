import {
    Box,
    List,
    ListItem,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";
import "./Footer.css";
import { NavLink } from "react-router-dom";
export default function Footer() {
    return (
        <>
            <footer>
                <Box className="footer_section">
                    <Stack className="footer_top">
                        <Stack className="footer_box box1">
                            <Box className="footer_logo">
                                <NavLink to="/">
                                    <img
                                        src="/images/white_on_trans.png"
                                        alt="footer logo"
                                    />
                                </NavLink>
                            </Box>
                            <Box className="footer_address">
                                <List className="address_list">
                                    <ListItem className="list">
                                        <ListItemText>
                                            <Typography variant="body1">
                                                Addresss: 123 Pall Mall, London
                                                England
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>

                                    <ListItem className="list">
                                        <ListItemText>
                                            <Typography variant="body1">
                                                Email: hello@gmail.com
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>

                                    <ListItem className="list">
                                        <ListItemText>
                                            <Typography variant="body1">
                                                Phone: (012) 345 6789
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Box>
                            <Box className='social-links'>
                                <Typography variant="body1">
                                    Follow Us On
                                </Typography>
                                <Box className="footer-icon">
                                    <a href="#">
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fa-brands fa-youtube"></i>
                                    </a>
                                </Box>

                            </Box>
                        </Stack>
                        <Stack className="footer_box box2">
                            <Box className="footer_head">
                                <Typography variant="h4">
                                    Quick Links
                                </Typography>
                            </Box>
                            <Box className="footer_list">
                                <List>
                                    <ListItem className="link">
                                        <NavLink
                                            to="/showproductlist"
                                            className="navlink"
                                        >
                                            <ListItemText
                                                className="text"
                                                primary="Products"
                                            />
                                        </NavLink>
                                    </ListItem>
                                    <ListItem className="link">
                                        <NavLink
                                            to="/user/profile-details"
                                            className="navlink"
                                        >
                                            <ListItemText primary="My Account" />
                                        </NavLink>
                                    </ListItem>
                                    <ListItem className="link">
                                        <NavLink
                                            to="/login"
                                            className="navlink"
                                        >
                                            <ListItemText primary="Login" />
                                        </NavLink>
                                    </ListItem>
                                    <ListItem className="link">
                                        <NavLink
                                            to="/registration"
                                            className="navlink"
                                        >
                                            <ListItemText primary="Register" />
                                        </NavLink>
                                    </ListItem>
                                </List>
                            </Box>
                        </Stack>
                        <Stack className="footer_box box3">
                            <Box className="footer_head">
                                <Typography variant="h4">Main Menu</Typography>
                            </Box>
                            <Box className="footer_list">
                                <List>
                                    <ListItem className="link">
                                        <NavLink to="/" className="navlink">
                                            <ListItemText primary="Home" />
                                        </NavLink>
                                    </ListItem>
                                    <ListItem className="link">
                                        <NavLink
                                            to="/aboutus"
                                            className="navlink"
                                        >
                                            <ListItemText primary="About Us" />
                                        </NavLink>
                                    </ListItem>
                                    <ListItem className="link">
                                        <NavLink to="/blog" className="navlink">
                                            <ListItemText primary="Blog" />
                                        </NavLink>
                                    </ListItem>
                                    <ListItem className="link">
                                        <NavLink to="/contactus" className="navlink">
                                            <ListItemText primary="Contact Us" />
                                        </NavLink>
                                    </ListItem>
                                </List>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack className="footer_bottom">
                        <Typography variant="body1">
                            Coffee House &copy; 2023
                        </Typography>
                    </Stack>
                </Box>
            </footer>
        </>
    );
}
