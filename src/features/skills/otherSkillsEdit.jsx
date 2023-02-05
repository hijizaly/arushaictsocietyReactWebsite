import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import {useAddOtherSkillsMutation, useAllSkillsQuery} from "./skillsApiSlice";
import {Button, ButtonGroup, FormControl, Stack, Typography,Checkbox} from "@mui/material";
import * as React from "react";
import {useState} from "react";

const OtherSkillsEdit =(props)=>{
    const allSkills = useAllSkillsQuery();
    const [addOtherSkills,result]=useAddOtherSkillsMutation();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const otherSkills_ = props.otherSkills;
    const allSkillsAvailable=allSkills.data.data;


    let prevSkills_={};
    let allSkillsIdAvailable=[];
    for(let i=0;i<otherSkills_.length;i++){
        // prevSkills.push({'skill_id':otherSkills_[i].other_occupation_id,'skill_name':otherSkills_[i].other_occupation_name});
        prevSkills_[otherSkills_[i].other_occupation_id]={'skill_id':otherSkills_[i].other_occupation_id,'skill_name':otherSkills_[i].other_occupation_name};
    }

    for(let i=0;i<allSkillsAvailable.length;i++){
        allSkillsIdAvailable.push({skill_id:allSkillsAvailable[i].skill_id,skill_name:allSkillsAvailable[i].skill_name});
    }

    async function otherSkillSubmission(e) {
        e.preventDefault();
        // console.log(inputs);
        let finalSkillsUpdated = [];


        for (let key in inputs) {
            // console.log(inputs[key]);
            if (inputs[key] !== null) {
                finalSkillsUpdated.push(key);
            }
        }
        finalSkillsUpdated={'occupation_id':finalSkillsUpdated}


        try {
            await addOtherSkills({otherSkills: finalSkillsUpdated}).unwrap();
            // console.log(result.data);
            props.closeHandler;

        } catch (e) {
            console.dir(e)
        }

    }
    // console.log(result.data);
    if(result.isSuccess) {
        // console.dir(result)
        props.closeHandle();
    };


    const inputsOnChangeOnhandle = (e) => {
        setInputs((prevState => ({...prevState, [e.target.name]: e.target.value})));
        // console.dir(e.target.value);
    };

    const [inputs, setInputs] = useState(prevSkills_);
    const toggleHandler=(inputItem)=>()=>{
        setInputs((state)=>({
            ...state,
            [inputItem.skill_id]:state[inputItem.skill_id]
            ? null : {
                skill_id:inputItem.skill_id,
                    skill_name:inputItem.skill_name
                }
        }));
    };


    // console.table(allSkillsIdAvailable)
    // console.table(prevSkills_);


    return (
        <form onSubmit={otherSkillSubmission}>
            <FormControl>
                <Box sx={{ flexGrow: 1,border: '1px dashed grey',p:2,my:2 }}>
                    <Grid container spacing={3}>
                        {/*Test Area*/}
                        {/*<Checkbox defaultChecked={inputs.allOtherSkills} value={false ? true:false} name="allOtherSkills" onChange={inputsOnChangeOnhandle} />*/}

                        {/*Test Area*/}
                        {allSkillsIdAvailable.map((eachSkills,key) => (
                            <Grid item xs={4} md={4}>
                                <Item key={key}>
                                    <Stack direction="row">

                                        <input
                                        onChange={toggleHandler(eachSkills)}
                                        checked={inputs[eachSkills.skill_id]}
                                        type="checkbox"
                                        />

                                        <Typography variant="h7">
                                            {eachSkills.skill_name}
                                        </Typography>
                                    </Stack>
                                </Item>
                            </Grid>
                        ))}

                    </Grid>
                </Box>

                <ButtonGroup>
                    <Button type="submit" color="success" variant="contained">Submit</Button>
                </ButtonGroup>

            </FormControl>
        </form>

    );
}
export default OtherSkillsEdit;

