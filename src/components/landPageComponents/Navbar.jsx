import {useState} from "react";
import React, { lazy, Suspense } from 'react';

import {close, logo, menu} from "../../assets";
import {navLinks} from "../../constants";
const Stack = lazy(()=>import('@mui/material/Stack'));
const Menu = lazy(()=>import('@mui/material/Menu'));
const MenuItem=lazy(()=>import('@mui/material/MenuItem'));
const LiveHelpOutlined=lazy(()=>import('@mui/icons-material/LiveHelpOutlined'));
const PeopleOutline=lazy(()=>import('@mui/icons-material/PeopleOutline'));
const MuiDialog=lazy(()=>import('../primaryComponents/MuiDialog'));
const LogInForm=lazy(()=>import('../primaryComponents/LogInForm'));
const SignUpForm=lazy(()=>import('../primaryComponents/SignUpForm'));
const MuiTabs=lazy(()=>import('../primaryComponents/MuiTabs'));

import MuiButton from "../primaryComponents/MuiButton";

import {Link} from "react-router-dom";


const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);
    const [dialogOpen, setdialogOpen] = useState(false);


    const menuOpener_ = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const menuCloser_ = () => {
        setAnchorEl(null);
    };
    const dialogOpener = () => {
        setdialogOpen(true);
        menuCloser_();
    };
    const dialogCloser = () => {
        setdialogOpen(false);
    };

    function navMenu_(alignment) {
        return(
            <Stack spacing={2} direction={alignment}>

                <li>
                    <MuiButton color="success" variant="outlined" btnText="Home" action="" size="small"
                               btnType="iconbtn"/>
                </li>

                <li>
                    <MuiButton color="success" variant="contained" btnText="Membership" action="" size="small"
                               btnType="iconbtn" btnIcon="fingerprint" handleClick={menuOpener_}/>

                </li>
                <li>
                    <MuiButton color="success" variant="contained" btnText="Join" action="" size="small"
                               btnType="iconbtn" btnIcon="fingerprint" handleClick={dialogOpener}/>

                </li>
                <li>
                    <Link to="aboutUs">
                        <MuiButton color="success" variant="contained" btnText="About"
                                   size="small" btnType="iconbtn"
                                   btnIcon="fingerprint"/>
                    </Link>

                </li>


            </Stack>

        );

    }


    return (
        <Suspense fallback="Loading...">
            <nav className="w-full flex py-6 justify-between items-center navbar">
                {/*<div className="absolute z-[0] w-[30%] h-[30%] -left-[50%] rounded-full blue__gradient" />*/}

                <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>

                <ul className="list-none sm:flex hidden justify-end items-center flex-1">

                    {navMenu_("row")}


                </ul>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={menuOpen}
                    onClose={menuCloser_}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    <MenuItem><Link to="allMembers"><PeopleOutline sx={{mr: 2}}/>Members</Link></MenuItem>
                    {/*<MenuItem onClick={menuCloser_}>Why </MenuItem>*/}
                    <MenuItem onClick={menuCloser_}><Link to="aboutUs"><LiveHelpOutlined sx={{mr: 2}}/>Why Join</Link></MenuItem>
                </Menu>

                <MuiDialog openState={dialogOpen} closeHandle={dialogCloser}>

                    <MuiTabs
                        childrenComponents={[<LogInForm closeHandle={dialogCloser}/>,
                            <SignUpForm closeHandle={dialogCloser}/>]}
                        componentsNames={["LogIn", "SignUp"]}
                    />
                </MuiDialog>


                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                    >

                        <ul className="list-none flex justify-end items-start flex-1 flex-col">

                            {navMenu_("column")}

                        </ul>
                    </div>
                </div>
            </nav>
        </Suspense>
    );
};

export default Navbar;
