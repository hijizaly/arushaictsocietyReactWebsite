import {Card, CardActions, CardContent, CardHeader, Divider} from "@mui/material";
import Billing from "../landPageComponents/Billing";
import IconButton from "@mui/material/IconButton";
import {Edit} from "@mui/icons-material";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";

const ContentsHolder =(props)=>{
    return (

        <Card sx={{backgroundColor: "#3a727a"}}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: red[100]}} aria-label="recipe">
                        {props.compId}
                    </Avatar>
                }
                title="component id"
             // subheader="component id"

            />
                {/*title='Samaki'*/}
                {/*subheader="September 14, 2016"*/}
            <Divider/>
            <CardContent sx={{m:4}}>
                {props.children}
            </CardContent>
            <CardActions>
                <IconButton aria-label="share">
                    <Edit/>
                </IconButton>
            </CardActions>
        </Card>
    );
}
export default ContentsHolder;