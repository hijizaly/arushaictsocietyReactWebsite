import * as React from "react";
import {Box, Button, ButtonGroup, FormControl, MenuItem, Select, Stack, TextField} from "@mui/material";
import {useState} from "react";
import {useAllSkillsQuery} from "../skills/skillsApiSlice";
import dayjs from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import {FillingBottle} from "react-cssfx-loading";
import {useUpdateMembersMutation} from "./usersApiSlice2";
import {useJwt} from "react-jwt";
import authTokenStoreFun from "../auth/authToken";
import Loader from "../../components/primaryComponents/Loader";


const UserEditProfile = (prop) => {
    // const allSkills = useAllSkillsQuery();
    const allSkills = prop.skillsData;
    const editUsersData=useUpdateMembersMutation();
    const {decodedToken} = useJwt(authTokenStoreFun.tokenGet());

    //

    const inputsOnChangeOnhandle = (e) => {
        setInputs((prevState => ({...prevState, [e.target.name]: e.target.value})));
    };
    let inputs, setInputs;
    let skillId=allSkills.data?.data.find(e => e.skill_name === prop.userDetails.occupation).skill_id;
    // console.dir(skillId);
    // console.dir(allSkills);

    if (allSkills.isSuccess) {
        [inputs, setInputs] = useState({
            name: prop.userDetails.member_fullname,
            email: prop.userDetails.member_email,

            address: prop.userDetails.member_fullname,
            phone: prop.userDetails.member_phone,
            dob: prop.userDetails.dob,
            // occupation_id: allSkills.isSuccess ? allSkills.data.data.find(e => e.skill_name === prop.userDetails.occupation).skill_id:"",
            occupation_id:skillId
        });
    } else {
        [inputs, setInputs] = useState({
            name: prop.userDetails.member_fullname,
            email: prop.userDetails.member_email,

            address: prop.userDetails.member_fullname,
            phone: prop.userDetails.member_phone,
            dob: prop.userDetails.dob,
            occupation_id: "",
        });
    }

    // console.log(allSkills.data.data.includes({skill_name:prop.userDetails.occupation}))
    // console.log(allSkills.data.data);
    // console.log(allSkills.data.data.find(e=>e.skill_name===prop.userDetails.occupation).skill_id);

    const editSubmit = async (e) => {
        e.preventDefault();
        const tF = {
            "address": inputs.address,
            "dob": inputs.dob,
            "email": inputs.email,
            "name": inputs.name,
            "occupation_id": inputs.occupation_id,
            "password": inputs.password,
            "phone": inputs.phone,
            "status":decodedToken?.status,
            "role":decodedToken?.role
        }

        try {
            await editUsersData[0]({id:decodedToken?.id,rest:tF}).then(() => {
                console.log("DONE...")
                prop.closeHandle();
            })
        } catch (e) {
            console.log(e);
        }
    }


    const [value, setValue] = React.useState(dayjs('1991-01-01'));
    const handleCalenderChange = (newValue) => {
        setValue(newValue);
        console.log(newValue);
    };
    let content;
    if(allSkills.isLoading) content = <Loader message="Fetching" sizeinPx="30"/> ;

    if(allSkills.isSuccess) content = content = (
        <React.Fragment>
            <form onSubmit={editSubmit} >
                <FormControl sx={{my:3}}>
                    <Stack spacing={4} >
                        <TextField label="Fullname" size="small" name="name" value={inputs.name}
                                   onChange={inputsOnChangeOnhandle} required/>

                        <Stack direction="row" spacing={2}>
                            <TextField label="Email" size="small" name="email" value={inputs.email}
                                       onChange={inputsOnChangeOnhandle} required/>
                            <TextField label="phone" size="small" type="text" name="phone" value={inputs.phone}
                                       onChange={inputsOnChangeOnhandle} required/>

                        </Stack>
                        <TextField label="Address" size="small"
                                   name="address" type="text" value={inputs.address} onChange={inputsOnChangeOnhandle}
                                   required/>

                        {
                            allSkills.isSuccess && (
                                <Select
                                    labelId="demo-simple-select-label"
                                    value={inputs.occupation_id}
                                    label="Professional"
                                    onChange={inputsOnChangeOnhandle}
                                    name="occupation_id"
                                    required
                                >
                                    {
                                        allSkills.data.data.map((sk) => {
                                            return (
                                                <MenuItem value={sk.skill_id}
                                                          key={sk.skill_id}>{sk.skill_name}</MenuItem>);
                                        })
                                    }
                                </Select>



                            )
                        }
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker

                                label="Date desktop"
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                name="dob"
                                onChange={handleCalenderChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>

                        <ButtonGroup m={1}>
                            <Button type="submit" color="success" variant="contained">Edit</Button>
                        </ButtonGroup>

                    </Stack>

                </FormControl>


            </form>


        </React.Fragment>
    );
    return content;
}
export default UserEditProfile;