import {useState} from "react";

import {close, logo, menu} from "../../assets";
import {navLinks} from "../../constants";
import {Stack, Menu, MenuItem} from '@mui/material';
// import {MuiButton,MuiMenu,MuiDialog,LogInForm,SignUpForm,MuiTabs} from "../primaryComponents/"
import MuiButton from "../primaryComponents/MuiButton";
import MuiDialog from "../primaryComponents/MuiDialog"
import LogInForm from "../primaryComponents/LogInForm";
import SignUpForm from "../primaryComponents/SignUpForm";
import MuiTabs from "../primaryComponents/MuiTabs";
import {EditOutlined, LiveHelpOutlined, PeopleOutline} from "@mui/icons-material";
import * as React from "react";


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


    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">

                <Stack spacing={2} direction="row">

                    <li>
                        <MuiButton color="success" variant="contained" btnText="Home" action="" size="small"
                                   btnType="iconbtn" btnIcon="fingerprint"/>
                        {/*<MuiMenu/>*/}
                        {/*<MuiDialog/>*/}
                    </li>
                    <li>
                        <MuiButton color="success" variant="contained" btnText="About" size="small" btnType="iconbtn"
                                   btnIcon="fingerprint"/>

                    </li>
                    <li>
                        <MuiButton color="success" variant="contained" btnText="Membership" action="" size="small"
                                   btnType="iconbtn" btnIcon="fingerprint" handleClick={menuOpener_}/>

                    </li>
                    <li>
                        <MuiButton color="success" variant="contained" btnText="Join" action="" size="small"
                                   btnType="iconbtn" btnIcon="fingerprint"/>

                    </li>

                    {/*  {navLinks.map((nav, index) => (*/}
                    {/*  <li*/}
                    {/*    key={nav.id}*/}
                    {/*    className={`font-poppins font-normal cursor-pointer text-[16px] ${*/}
                    {/*      active === nav.title ? "text-white" : "text-dimWhite"*/}
                    {/*    } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}*/}
                    {/*    onClick={() => setActive(nav.title)}*/}
                    {/*  >*/}
                    {/*    <a href={`#${nav.id}`}>{nav.title}</a>*/}
                    {/*  </li>*/}
                    {/*))}*/}
                </Stack>


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
                <MenuItem onClick={dialogOpener}><PeopleOutline sx={{mr: 2}}/>Members</MenuItem>
                {/*<MenuItem onClick={menuCloser_}>Why </MenuItem>*/}
                <MenuItem onClick={menuCloser_}><LiveHelpOutlined sx={{mr: 2}}/>Why Join</MenuItem>
            </Menu>
            {/*<LogInForm openState={dialogOpen} closeHandle={dialogCloser}/>*/}


            <MuiDialog openState={dialogOpen} closeHandle={dialogCloser}>

                <MuiTabs
                         childrenComponents={[<LogInForm closeHandle={dialogCloser}/>,<SignUpForm closeHandle={dialogCloser}/>]}
                         componentsNames={["LogIn","SignUp"]}
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
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                    active === nav.title ? "text-white" : "text-dimWhite"
                                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
