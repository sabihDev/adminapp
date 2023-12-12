import React from "react";
import { AppBar, IconButton, InputBase, Toolbar } from "@mui/material";
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import { setMode } from "../state/index.js";


const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
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
                        <IconButton onClick={() => console.log("open")}>
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
                            <IconButton>
                                <ArrowDropDownOutlined sx={{ fontSize: "25px" }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
