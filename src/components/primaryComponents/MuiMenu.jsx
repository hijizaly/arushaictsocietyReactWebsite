import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function MuiMenu(props) {
    // console.log(props.menuListArray);
    return (
        <Menu
            id="basic-menu"
            anchorEl={props.anchorElement}
            open={props.currentOpenState}
            onClose={props.menuClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={props.menuClose}>ProfileX</MenuItem>
            <MenuItem onClick={props.menuClose}>My accountX</MenuItem>
            <MenuItem onClick={props.menuClose}>LogoutX</MenuItem>
        </Menu>
    );

}
