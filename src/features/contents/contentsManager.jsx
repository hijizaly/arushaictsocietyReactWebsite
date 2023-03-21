import * as React from "react";

import Hero from "../../components/landPageComponents/Hero";
import {Button, Card, CardActions, CardContent, CardHeader, Divider, Stack} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import {Edit} from "@mui/icons-material";
import Stats from "../../components/landPageComponents/Stats";
import Billing from "../../components/landPageComponents/Billing";
import CardDeal from "../../components/landPageComponents/CardDeal";
import ContentsHolder from "../../components/primaryComponents/contentsHolder";
import Business from "../../components/landPageComponents/Business";
import Testimonials from "../../components/landPageComponents/Testimonials";
import Clients from "../../components/landPageComponents/Clients";
import CTA from "../../components/landPageComponents/CTA";
import MenuIcon from "@mui/icons-material/Menu";
import MuiDialog from "../../components/primaryComponents/MuiDialog";
import MuiTabs from "../../components/primaryComponents/MuiTabs";
import AdminPassChange from "../admin/adminPassChange";
import UserAccSettings from "../users/userAccSetting";
import {useState} from "react";
import ContentsAdder from "./addContents";

const ContentsManager = () => {
    function cc() {
        console.dir("cc Pressed");
    }
    const [dialogOpen, setdialogOpen] = useState(false);
    const dialogOpener = () => {
        setdialogOpen(true);
    };
    const dialogCloser = () => {
        setdialogOpen(false);
    };


    return (
        <React.Fragment>

            <MuiDialog openState={dialogOpen} closeHandle={dialogCloser}>


                <ContentsAdder/>

            </MuiDialog>

            <Button variant="outlined" startIcon={<Edit />} m-b={3} onClick={dialogOpener}>
                Edit Component Contents
            </Button>
            <br/>

            <Stack direction="column" spacing={4}>
                <ContentsHolder compId="A">
                    <Hero/>
                </ContentsHolder>

                <ContentsHolder compId="B">
                    <Stats/>
                </ContentsHolder>

                <ContentsHolder compId="C">
                    <Business/>
                </ContentsHolder>

                <ContentsHolder compId="D">
                    <Billing/>
                </ContentsHolder>

                <ContentsHolder compId="E">
                    <CardDeal/>
                </ContentsHolder>

                <ContentsHolder compId="">
                    <Testimonials/>
                </ContentsHolder>

                <ContentsHolder compId="F">
                    <Clients/>
                </ContentsHolder>

                <ContentsHolder compId="G">
                    <CTA/>
                </ContentsHolder>

            </Stack>


        </React.Fragment>
    );
}
export default ContentsManager;