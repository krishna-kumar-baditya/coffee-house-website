import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

import { ListItem, ListItemText } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { handleLogout } from "../../Redux/authSlice";
import { profileImagePath } from "../../API/axiosInstance";

import "./Header.css";

export default function Header() {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorElNav, setAnchorElNav] = useState(null);

    const [uname, setUname] = useState("");
    const [logintoken, setLogintoken] = useState("");
    const [loginImage, setImage] = useState("");
    const [fix,setFix] = useState(false)
    let LoginName = localStorage.getItem("LoginName");
    let token = localStorage.getItem("token");
    let profile_image = localStorage.getItem("profileImage");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const pages = [
        {
            name: "Home",
            route: "/",
        },
        {
            name: "Blog",
            route: "/blog",
        },
        {
            name: "AddProducts",
            route: "/createproduct",
        },
        {
            name: "Products",
            route: "/showproductlist",
        },
        {
            name: "AboutUs",
            route: "/aboutus",
        },
        {
            name: "ContactUs",
            route: "/contactus",
        },
    ];
    const settings = logintoken
        ? [
              {
                  name: "Profile",
                  route: "/user/profile-details",
              },
              {
                  name: "Logout",
                  route: "/",
              },
          ]
        : [
              {
                  name: "Profile",
                  route: "/user/profile-details",
              },
              {
                  name: "Login",
                  route: "/login",
              },
              {
                  name: "Register",
                  route: "/registration",
              },
          ];

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    useEffect(() => {
        setUname(LoginName);
        setLogintoken(token);
        setImage(profile_image);
    }, [LoginName, token, profile_image]);
    const logout = () => {
        console.log("logout clicked");

        dispatch(handleLogout());
        navigate("/");
        window.location.reload();
    };

    function navbarFix(){
        if(window.scrollY > 300){
            setFix(true)
        }
        else{
            setFix(false)
        }
    }
    window.addEventListener('scroll',navbarFix)

    return (
        <header>
            <AppBar
                className={fix ? 'header fixed' : 'header'}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters className="navbar-container">
                        <Box
                            sx={{
                                display: { xs: "flex", md: "none" },
                            }}
                            className="sidebar"
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: "block", md: "none" } }}
                            >
                                {pages.map((page) => (
                                    <NavLink
                                        key={page.route}
                                        to={page.route}
                                        className="link"
                                    >
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography
                                                sx={{ textAlign: "center" }}
                                            >
                                                {page.name}
                                            </Typography>
                                        </MenuItem>
                                    </NavLink>
                                ))}
                            </Menu>
                        </Box>

                        <Box className="navabr-img-container">
                            <NavLink to="/">
                                <img
                                    src="/images/white_on_trans.png"
                                    alt="logo"
                                    className="navbar-img"
                                />
                            </NavLink>
                        </Box>
                        <Box className="navbar-link-container">
                            <Box className="navbar-links">
                                {pages.map((page) => (
                                    <NavLink
                                        key={page.route}
                                        to={page.route}
                                        className="link"
                                    >
                                        <ListItem>
                                            <ListItemText
                                                primary={page.name}
                                                sx={{
                                                    color: "inherit",
                                                }}
                                            />
                                        </ListItem>
                                    </NavLink>
                                ))}
                            </Box>
                        </Box>
                        <Box className="navbar-settings">
                            {logintoken ? (
                                <>
                                    <Typography
                                        component="span"
                                        sx={{
                                            display: "inline-block",
                                            color: "inherit",
                                        }}
                                        className="username"
                                    >
                                        Welcome {uname}
                                    </Typography>
                                </>
                            ) : (
                                ""
                            )}
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={
                                            loginImage
                                                ? profileImagePath(loginImage)
                                                : "/static/images/avatar/2.jpg"
                                        }
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <NavLink
                                        key={setting.route}
                                        to={setting.route}
                                        className="link"
                                    >
                                        <MenuItem
                                            onClick={() => {
                                                handleCloseUserMenu();
                                                if (setting.name === "Logout") {
                                                    logout();
                                                }
                                            }}
                                        >
                                            <Typography textAlign="center">
                                                {setting.name}
                                            </Typography>
                                        </MenuItem>
                                    </NavLink>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    );
}
