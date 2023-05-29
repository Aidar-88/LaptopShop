import { AppBar, Box, IconButton, Toolbar, Typography, } from "@mui/material";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

import { Link, Outlet, } from 'react-router-dom';



const Layout = () => {
    return (

        <>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: "space-around" }}>
                    <Box sx={{ display: "flex", flexGrow: "1", alignItems: "center" }}>
                        <IconButton color="inherit" size="large" edge="start" aria-label="menu" sx={{ ml: 2, mr: 4 }}>
                            <MenuIcon />
                        </IconButton>
                        <Link style={{ textDecoration: "none", color: "inherit" }} to="/" >
                            <Typography
                                variant="h6" sx={{ mr: 3, flexGrow: "1", letterSpacing: ".2rem" }}>
                                Home
                            </Typography>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "inherit" }} to="/Products">
                            <Typography
                                variant="h6" sx={{ mr: 3, flexGrow: "1", letterSpacing: ".1rem" }}>
                                Products
                            </Typography>
                        </Link>
                        <Link style={{ textDecoration: "none", color: "inherit" }} to="/AboutUs">
                            <Typography variant="h6" sx={{ mr: 3, flexGrow: "1", letterSpacing: ".1rem" }}>About Us</Typography>
                        </Link>
                    </Box>
                    <Box sx={{ display: "flex", color: "inherit", justifyContent: "space-between" }}>
                        <Link style={{ textDecoration: "none", color: "inherit" }} to="Auth">
                            <IconButton color="inherit">
                                <AccountCircleIcon />
                            </IconButton>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>

            <Outlet />


        </>
    );
}

export default Layout;