import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Menu, MenuItem, Stack} from "@mui/material";
import {useMembersDetailsQuery} from "./usersApiSlice2";
import {useAllTimelinesQuery} from "../timeline/timelineApiSlice"
import {useState} from "react";
import {EditOutlined} from "@mui/icons-material";
import MuiDialog from "../../components/primaryComponents/MuiDialog";
import UserEditProfile from "./userEditProfile";
import {useAllSkillsQuery} from "../skills/skillsApiSlice";
import authTokenStoreFun from "../auth/authToken";
import {useJwt} from "react-jwt";
import OtherSkillsEdit from "../skills/otherSkillsEdit";
import MuiTabs from "../../components/primaryComponents/MuiTabs"
import SkillTimeline from "../timeline/skillTimeline";
import Loader from "../../components/primaryComponents/Loader";


const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function UserDashProfile() {
    const {decodedToken} = useJwt(authTokenStoreFun.tokenGet());

    const memberDetails = useMembersDetailsQuery(decodedToken?.id);
    const memberTimeline = useAllTimelinesQuery();
    const allSkills = useAllSkillsQuery();


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    //Menu
    const menuOpener_ = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const menuCloser_ = () => {
        setAnchorEl(null);
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);
    //Menu
    //Dialog
    const [dialogOpen, setdialogOpen] = useState(false);
    const dialogOpener = () => {
        setdialogOpen(true);
        menuCloser_();
    };
    const dialogCloser = () => {
        memberDetails.refetch(decodedToken?.id)
        setdialogOpen(false);
    };
    //Dialog

    let content;
    content = <h1>This's DAshboard</h1>;

    let memberTimeline_;
    if (memberTimeline.isSuccess) memberTimeline_ = memberTimeline.data


    // const nD=dayjs("2023-01-06T15:11:26.000000Z");
    //
    // console.table(nD);
    // const nd_= Date.parse('2023-01-06T15:11:26.000000Z');
    // console.dir(nd_.getTime())
    function dateWithOutUTC(_dateTime) {
        _dateTime = new Date(_dateTime);
        const cTime = _dateTime.getTimezoneOffset() * 60000;
        return new Date(_dateTime.getTime() - cTime);
    }

    const date_ = '2023-01-06T15:11:26.000000Z';
    // let d = new Date('2023-01-06T15:11:26.000000Z');
    // let d = dateWithOutUTC(parseInt('2023-01-06T15:11:26.000000'));
    // console.dir();

    // console.log(date_.split('T')[0])
    const loading = (<Loader message="Fetching" sizeinPx="50"/>);
    if (memberDetails.isLoading) content = loading;
    if (memberDetails.isError) content = <p>{memberDetails.error?.data?.message}</p>;

    if (memberDetails.isSuccess && memberTimeline.isSuccess)
        content = <Card sx={{maxWidth: 1345}}>
        <CardHeader
            avatar={
                <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">

                    {memberDetails.data.data.member_fullname[0]}
                </Avatar>
            }
            action={
                <IconButton aria-label="settings" onClick={menuOpener_}>
                    <MoreVertIcon/>
                </IconButton>
            }

            title={memberDetails.data.data.member_fullname}
            subheader="September 14, 2016"
        />
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={menuCloser_}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >

            <MenuItem onClick={dialogOpener}><EditOutlined sx={{mr: 2}}/> Edit Profile</MenuItem>
        </Menu>

        <MuiDialog openState={dialogOpen} closeHandle={dialogCloser}>

            <MuiTabs
                childrenComponents={[<UserEditProfile closeHandle={dialogCloser} userDetails={memberDetails.data.data}
                                                      skillsData={allSkills}/>,
                    <OtherSkillsEdit otherSkills={memberDetails.data.data.other_skills} closeHandle={dialogCloser}/>]}
                componentsNames={['Edit user Details', 'Edit Other Skills']}
            />

        </MuiDialog>

        <Stack direction="row" spacing={4}>
            <CardMedia
                component="img"
                height="100"
                image="/src/assets/people01.png"
                alt="Paella dish"
                sx={{height: '200px', width: '200px'}}
            />
            <CardContent>
                FullName:<Typography variant="h4">
                {memberDetails.data.data.member_fullname}

            </Typography>

                Email:<Typography variant="h4">
                {memberDetails.data.data.member_email}

            </Typography>
                Phone:<Typography variant="h4">
                {memberDetails.data.data.member_phone}

            </Typography>
                Skill Occupation:<Typography variant="h4">
                {memberDetails.data.data.occupation}

            </Typography>


            </CardContent>
        </Stack>


        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon/>
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon/>
            </IconButton>
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon/>
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <SkillTimeline/>
        </Collapse>
    </Card>


    return content;
}