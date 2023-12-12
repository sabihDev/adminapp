import React, { useState, useEffect } from 'react'
import {
    Box,
    useTheme,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material'

import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PointOfSaleOutlined,
    PublicOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined
} from '@mui/icons-material'

import { useLocation, useNavigate } from 'react-router-dom'

const navItems = [
    {
        text: 'Dashboard',
        icon: <HomeOutlined />
    },
    {
        text: 'Client Facing',
        icon: null
    },
    {
        text: 'Products',
        icon: <ShoppingCartOutlined />
    },
    {
        text: 'Customers',
        icon: <Groups2Outlined />
    },
    {
        text: 'Transactions',
        icon: <ReceiptLongOutlined />
    },
    {
        text: 'Geography',
        icon: <PublicOutlined />
    },
    {
        text: 'Sales',
        icon: null
    },
    {
        text: 'Overview',
        icon: <PointOfSaleOutlined />
    },
    {
        text: 'Daily',
        icon: <TodayOutlined />
    },
    {
        text: 'Monthly',
        icon: <CalendarMonthOutlined />
    },
    {
        text: 'Breakdown',
        icon: <PieChartOutlined />
    },
    {
        text: 'Management',
        icon: null
    },
    {
        text: 'Admin',
        icon: <AdminPanelSettingsOutlined />
    },
    {
        text: 'Performance',
        icon: <TrendingUpOutlined />
    }
]

const SideBar = ({
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
    drawerWidth,
}) => {
    const pathname = useLocation().pathname;
    const [isActive, setIsActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setIsActive(pathname.substring(1));
    }, [pathname]);
    return (
        <>
            <Box component="nav">
                {isSidebarOpen && (
                    <Drawer
                        open={isSidebarOpen}
                        onClose={() => setIsSidebarOpen(false)}
                        variant="persistent"
                        anchor="left"
                        sx={{
                            width: drawerWidth,
                            "& .MuiDrawer-paper": {
                                color: theme.palette.secondary[200],
                                backgroundColor: theme.palette.background.alt,
                                boxSizing: "border-box",
                                borderWidth: isNonMobile ? 0 : "2px",
                                width: drawerWidth
                            }
                        }}
                    >
                        <Box width="100%">
                            <Box m="1.5rem 2rem 2rem 3rem">
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography variant="h4" fontWeight="bold">
                                        ECOMVISION
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                        <ChevronLeft />
                                    </IconButton>
                                    )
                                }
                            </Box>
                            <List>
                                {navItems.map(({ text, icon }) => {
                                    if(!icon) {
                                        return(
                                            <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                                                {text}
                                            </Typography>
                                        )
                                    }

                                    const lcText = text.toLowerCase();

                                    return (
                                        <ListItem key={text} disablePadding>
                                            <ListItemButton onClick={() => {navigate(`/${lcText}`);
                                            setIsActive(lcText)}} sx={{ backgroundColor: isActive === lcText ? theme.palette.secondary[300] : "transparent", color: isActive === lcText ? "primary.main" : "neutral.main" }}>
                                                <ListItemIcon>
                                                    {icon}
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItemButton>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Box>
                    </Drawer>
                )}
            </Box>
        </>
    )
}

export default SideBar