import React, { useState } from "react";
import { AppBar, IconButton, InputBase, Toolbar , Typography, Button, Menu, MenuItem} from "@mui/material";
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import { setMode } from "../state/index.js";
import profileImage from "../assets/profile.jpeg";

const Navbar = ({user, isSidebarOpen, setIsSidebarOpen }) => {
    const dispatch = useDispatch();
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <>
            <AppBar
                sx={{
                    width: "100%",
                    position: "static",
                    background: "none",
                    boxShadow: "none",
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Left */}
                    <Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
                        <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <MenuIcon sx={{ fontSize: "25px" }} />
                        </IconButton>

                        <Box display="flex" alignItems="center" justifyContent="space-between" backgroundColor={theme.palette.background.alt} borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
                            <InputBase placeholder="Search..." />
                            <IconButton>
                                <Search />
                            </IconButton>
                        </Box>

                        <Box width="100%" display="flex" alignItems="center" justifyContent="flex-end" gap="1.5rem">
                            <IconButton onClick={() => dispatch(setMode())}>
                                {theme.palette.mode === "dark" ? (
                                    <DarkModeOutlined sx={{ fontSize: "25px" }} />
                                ) : (
                                    <LightModeOutlined sx={{ fontSize: "25px" }} />
                                )}
                            </IconButton>
                            <IconButton>
                                <SettingsOutlined sx={{ fontSize: "25px" }} />
                            </IconButton>
                            {/* <IconButton>
                                <ArrowDropDownOutlined sx={{ fontSize: "25px" }} />
                            </IconButton> */}
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Button onClick={handleClick}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        textTransform: "none",
                                        gap: "1rem",
                                    }}
                                >
                                    <Box
                                        component="img"
                                        alt="profile"
                                        src={profileImage}
                                        height="32px"
                                        width="32px"
                                        borderRadius="50%"
                                        sx={{ objectFit: "cover" }}
                                    />
                                    <Box textAlign="left">
                                        <Typography
                                            fontWeight="bold"
                                            fontSize="0.85rem"
                                            sx={{ color: theme.palette.secondary[100] }}
                                        >
                                            {user.name}
                                        </Typography>
                                        <Typography
                                            fontSize="0.75rem"
                                            sx={{ color: theme.palette.secondary[200] }}
                                        >
                                            {user.occupation}
                                        </Typography>
                                    </Box>
                                    <ArrowDropDownOutlined
                                        sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
                                    />
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={isOpen}
                                    onClose={handleClose}
                                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                >
                                    <MenuItem onClick={handleClose}>Log Out</MenuItem>
                                </Menu>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
