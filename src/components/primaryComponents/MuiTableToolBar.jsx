import {Divider, Toolbar} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import {DeleteIcon} from "@mui/icons-material/"
import * as React from "react";

export default function TableToolBar() {
    return (
        <>
            <Toolbar>
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                    <IconButton>
                        <EditOutlinedIcon />
                    </IconButton>
                </Tooltip>
                {/*<Tooltip title="Delete">*/}
                {/*    <IconButton>*/}
                {/*        <DeleteIcon />*/}
                {/*    </IconButton>*/}
                {/*</Tooltip>*/}
            </Toolbar>
            <Divider />


        </>
    );
}
// export default TabledToolBar;

