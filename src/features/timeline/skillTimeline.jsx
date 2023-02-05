import CardContent from "@mui/material/CardContent";
import {Box, Divider, Step, StepLabel, Stepper} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useAllTimelinesQuery} from "./timelineApiSlice";
import {
    DoubleArrowOutlined,
    PublishedWithChangesOutlined,
    Stars
} from "@mui/icons-material";

const SkillTimeline =(props)=>{
    const memberTimeline = useAllTimelinesQuery();
    let memberTimeline_;
    if (memberTimeline.isSuccess) memberTimeline_ = memberTimeline.data

    let mainSkillTimeline=[];
    let otherSkillTimeline=[];

    for(let i=0;i<memberTimeline_.data.length;i++){

        if(memberTimeline_.data[i].type==='main'){
            mainSkillTimeline.push(memberTimeline_.data[i])
        }else otherSkillTimeline.push(memberTimeline_.data[i]);
    }

    // console.dir(mainSkillTimeline)
    // console.dir(otherSkillTimeline)


    return (
        <CardContent>

            <Box sx={{
                width: '100%',
                overflow: "scroll",
                p: 2,
                border: '1px dashed grey'
            }}>
                <Typography variant='h5' sx={{my: 2}}>Main skills Timeline<DoubleArrowOutlined/></Typography>
                <Stepper activeStep={mainSkillTimeline.length} >
                    {mainSkillTimeline.reverse().map((timeline, key) => (
                        <Step key={key}>
                            {/*<StepLabel StepIconComponent={PublishedWithChangesOutlined} StepIconComponent={PublishedWithChangesOutlined}>*/}
                            <StepLabel StepIconComponent={PublishedWithChangesOutlined}>

                                <Typography variant="button">{timeline.old_occupation_id}</Typography><br/>
                                <Typography variant="caption" sx={{fontStyle: 'italic'}} >To</Typography><br/>
                                <Typography variant="button" sx={{fontWeight: 'bold'}}>{timeline.new_occupation_id}</Typography>

                                <Divider/>
                                <Typography variant="caption">{timeline.created_at.split('T')[0]}</Typography>


                            </StepLabel>


                        </Step>


                    ))}
                </Stepper>


            </Box>

            <Box sx={{
                width: '100%',
                height: 200,
                overflow: "scroll",
                p: 2,
                my: 5,
                border: '1px dashed grey'
            }}>
                <Typography variant='h5' sx={{my: 2}}>Other skills</Typography>

                <Stepper  alternativeLabel>
                    {otherSkillTimeline.reverse().map((timeline, key) => (
                        <Step key={key} >
                            <Typography variant="button"><StepLabel StepIconComponent={Stars}>{timeline.new_occupation_id}</StepLabel></Typography>
                            <Divider/>
                            <Typography variant="caption">{timeline.created_at.split('T')[0]}</Typography>
                        </Step>
                    ))}
                </Stepper>


            </Box>
        </CardContent>

    );
}
export default SkillTimeline;