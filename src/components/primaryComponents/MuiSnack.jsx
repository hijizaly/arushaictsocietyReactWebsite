import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {Alert} from "@mui/material";

export default function PositionedSnackbar(props) {

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;
    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={props.snackToastOpener}
                // autoHideDuration={1000}
                onClose={handleClose}
                // onClick={handleClose}
                message={props.messageText}
                key={vertical + horizontal}

            />
                {/*<Alert severity="error">{props.messageText}</Alert>*/}


        </div>
    );
}