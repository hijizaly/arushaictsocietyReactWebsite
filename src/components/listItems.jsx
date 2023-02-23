import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutline from '@mui/icons-material/PersonOutline'
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Link} from "react-router-dom";


export const mainListItems = (
    <React.Fragment>
        <Link to="/dash">
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItemButton>
        </Link>

        <Link to="/dash">
            <ListItemButton>

                <ListItemIcon>
                    {/*<ShoppingCartIcon />*/}
                    <PersonOutline/>
                </ListItemIcon>
                <ListItemText primary="Profile"/>
            </ListItemButton>
        </Link>


        {/*<Link to="/dash/users"><ListItemButton>*/}
        {/*<ListItemIcon>*/}
        {/*  <PeopleIcon />*/}
        {/*</ListItemIcon>*/}
        {/*<ListItemText primary="Member Manager" />*/}
        {/*</ListItemButton>*/}
        {/*</Link>*/}

        <Link to="/dash/skills">
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Manage Skills"/>
            </ListItemButton>
        </Link>

        <ListItemButton>
            <ListItemIcon>
                <LayersIcon/>
            </ListItemIcon>
            <ListItemText primary="Integrations"/>
        </ListItemButton>
    </React.Fragment>
);

export const adminListItems = (
    <React.Fragment>
        <Link to="/dash">
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItemButton>
        </Link>

        <Link to="/dash">
            <ListItemButton>
                <ListItemIcon>
                    {/*<ShoppingCartIcon />*/}
                    <PersonOutline/>
                </ListItemIcon>
                <ListItemText primary="Profile"/>
            </ListItemButton>
        </Link>


        <Link to="/dash/skills">
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Manage Skills"/>
            </ListItemButton>
        </Link>
        <Link to="/dash/skills">
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Manage Members"/>
            </ListItemButton>
        </Link>
        <Link to="/dash/skills">
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Manage Contents"/>
            </ListItemButton>
        </Link>


        <ListItemButton>
            <ListItemIcon>
                <LayersIcon/>
            </ListItemIcon>
            <ListItemText primary="Integrations"/>
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Current month"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Last quarter"/>
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Year-end sale"/>
        </ListItemButton>
    </React.Fragment>
);
