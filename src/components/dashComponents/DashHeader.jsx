
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Settings from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import * as React from "react";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {mainListItems, secondaryListItems} from "../listItems";
import {Stack,Menu,MenuItem} from '@mui/material';
import {useEffect, useState} from "react";
import {useSendLogoutMutation} from "../../features/auth/authApiSlice";
import authTokenStoreFun from "../../features/auth/authToken";
import {EditOutlined, Logout,SettingsOutlined} from "@mui/icons-material";
import MuiDialog from "../primaryComponents/MuiDialog";
import UserAccSettings from "../../features/users/userAccSetting";
import MuiTabs from "../primaryComponents/MuiTabs";
import UserPassChange from "../../features/users/userPassChange";


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const DashHeader=()=>{
    const [sendLogout,result]=useSendLogoutMutation();
    const navigate=useNavigate();
    const {pathname}=useLocation();
    const DashRegex=/^\/dash(\/)?$/

    useEffect(() => {
        if(result.isSuccess){
            authTokenStoreFun.tokenSet("");
            navigate('/')
        }

    }, [result.isSuccess,navigate]);


    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);

    const menuOpener_ = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const menuCloser_ = () => {
        setAnchorEl(null);
    };
    const logOutAction=()=>{
        sendLogout();
        navigate('/')
        authTokenStoreFun.tokenSet(null);//Store Token in LOCALSTORAGE

        // authTokenStoreFun.tokenSet("");
        // console.log(DashRegex.test(pathname));
    }

    const accSetting = () => {
        console.log("lunch account settings");

    }

    const [dialogOpen, setdialogOpen] = useState(false);
    const dialogOpener = () => {
        setdialogOpen(true);
        menuCloser_();
    }
    const dialogCloser = () => {
        setdialogOpen(false);
    }


    return(
        <React.Fragment>
            <AppBar position="absolute" open={open}>
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        Dashboard
                    </Typography>
                    <IconButton color="inherit" onClick={menuOpener_}>
                        {/*<Badge badgeContent={4} color="secondary">*/}
                            <Settings/>
                        {/*</Badge>*/}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    {mainListItems}
                    <Divider sx={{ my: 1 }} />
                    {/*{secondaryListItems}*/}
                </List>
            </Drawer>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={menuCloser_}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/*<MenuItem>Setting</MenuItem>*/}
                <Divider />
                <MenuItem onClick={dialogOpener}><SettingsOutlined sx={{mr: 2}}/>Settings</MenuItem>
                <MenuItem onClick={logOutAction}><Logout sx={{mr: 2}}/>Log Out</MenuItem>


            </Menu>

            <MuiDialog openState={dialogOpen} closeHandle={dialogCloser}>
                <MuiTabs componentsNames={["Change password","Email Confirmation","Activate account"]} childrenComponents={[<UserPassChange/>,<UserAccSettings/>,<UserAccSettings/>]}/>


            </MuiDialog>

        </React.Fragment>


    );
}

export default DashHeader;