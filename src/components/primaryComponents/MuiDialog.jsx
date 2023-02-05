import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


export default function MuiDialog(props) {

    return (
        <React.Fragment>

            <Dialog
                // fullWidth={fullWidth}
                // maxWidth={maxWidth}
                open={props.openState}
                onClose={props.closeHandle}
            >
                {/*<DialogTitle></DialogTitle>*/}
                <DialogContent>
                    {props.children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.closeHandle}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
