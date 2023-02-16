// import * as React from "react";

import {
    InputLabel,
    MenuItem,
    Select,
    ButtonGroup,
    Button,
    TextField,
    FormControlLabel,
    Stack,
    FormControl
} from '@mui/material';
import MuiButton from "./MuiButton";
import * as React from "react";
import {useState} from "react";

import dayjs from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {useAllSkillsQuery} from "../../features/skills/skillsApiSlice";
import {useAddMembersMutation, useIsEmailExistenceMutation} from "../../features/users/usersApiSlice2";
import {FillingBottle} from "react-cssfx-loading";
import SnackToast from "./MuiSnack";
import Loader from "./Loader";


export default function SignUpForm(props) {
    const [addNewMembers, result] = useAddMembersMutation();
    const [isEmailExistence, emailResult] = useIsEmailExistenceMutation();

    const [openToastStates, setOpenerToast] = useState({
        openState: false,
        toastMessages: ""
    });

    function openToastSnack(m) {
        setOpenerToast({openState: true, toastMessages: m});
    }

    const [value, setValue] = React.useState(dayjs('1991-01-01'));
    const handleCalenderChange = (newValue) => {
        setValue(newValue);
        console.log(newValue);
    };
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        rePassword: "",
        address: "",
        phone: "",
        dob: "1991-01-01",
        occupation_id: "",

    });
    const inputsOnChangeOnhandle = (e) => {
        setInputs((prevState => ({...prevState, [e.target.name]: e.target.value})));
    };
    const [validEmailState, setValidEmailState] = useState({error: false, errorText: ""});

    const emailTester = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    const emailCheck = async (e) => {
        if (e.target.value.length <= 0) {
            setValidEmailState({error: true, errorText: "Please fill Email"});

        } else {
            setValidEmailState({error: false, errorText: ""});
            if (!emailTester.test(e.target.value)) {
                setValidEmailState({error: true, errorText: "Invalid Email"});
            } else {
                const e_ = {
                    "email": e.target.value
                }
                try {
                    const final_ = await isEmailExistence(e_).unwrap(() => {
                    }).then((r) => {
                        setValidEmailState({error: r.status, errorText: r.message})
                    })
                } catch (e) {
                    console.dir(e)
                }
            }


        }

    }

    const signUpSubmitaion = async (e) => {
        e.preventDefault();
        delete inputs.rePassword
        inputs.status = "0"
        inputs.role = "null"

        const tF = {
            "address": inputs.address,
            "dob": inputs.dob,
            "email": inputs.email,
            "name": inputs.name,
            "occupation_id": inputs.occupation_id,
            "password": inputs.password,
            "phone": inputs.phone,
            "role": inputs.role,
            "status": inputs.status
        }
        try {
            const finalResult=await addNewMembers(tF)
                .unwrap(() => {})
                .then((r) => {
                    // console.log(r);
                    if(!r.status){
                        openToastSnack(r.message);
                    }else {
                        openToastSnack("Everything Go Well & registration go well");
                        props.closeHandle()
                    }
                })
                .then(() => {
                    // props.closeHandle()
                })

        } catch (e) {
            console.log(e);
            // snackToastOpener();
            openToastSnack("Sorry Something Went Wrong");

        }
        // console.dir(result.isError)


    };
    const [occupation, setOccupation] = React.useState('');

    const handleOccupationChange = (event) => {
        setOccupation(event.target.value);
    };
    const {data: allData, error, isLoading, isSuccess, isError} = useAllSkillsQuery();


    return (
        <React.Fragment>


            <form onSubmit={signUpSubmitaion}>
                <FormControl>
                    <Stack direction="column" spacing={4}>

                        <TextField label="Fullname" size="small" value={inputs.name} onChange={inputsOnChangeOnhandle}
                                   name="name" required/>
                        <TextField label="Email" size="small" value={inputs.email} onChange={inputsOnChangeOnhandle}
                                   name="email" onBlur={emailCheck}
                                   error={validEmailState.error}
                                   helperText={validEmailState.error ? validEmailState.errorText : ""}
                        />
                        <TextField label="Password" size="small" value={inputs.password}
                                   onChange={inputsOnChangeOnhandle}
                                   name="password" type="password" required/>
                        <TextField label="Password" size="small" value={inputs.rePassword}
                                   onChange={inputsOnChangeOnhandle}
                                   name="rePassword" type="password" required/>
                        <TextField label="Address" size="small" value={inputs.address} onChange={inputsOnChangeOnhandle}
                                   name="address" type="text" required/>
                        <TextField label="Phone" size="small" value={inputs.phone} onChange={inputsOnChangeOnhandle}
                                   name="phone" type="phone" required/>
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

                        <>
                            {
                                isLoading && <Loader message="Fetching..." sizeinPx="30"/>
                            }
                        </>

                        <>
                            {isError && <center><p><i>Failed to fetch Skills</i></p></center>}
                        </>

                        {/*<InputLabel id="demo-simple-select-label">Professional</InputLabel>*/}
                        {


                            isSuccess && (

                                <Select
                                    labelId="demo-simple-select-label"
                                    value={inputs.occupation_id}
                                    label="Professional"
                                    onChange={inputsOnChangeOnhandle}
                                    name="occupation_id"
                                    required
                                >
                                    {
                                        allData.data.map((sk) => {
                                            return (
                                                <MenuItem value={sk.skill_id}
                                                          key={sk.skill_id}>{sk.skill_name}</MenuItem>);
                                        })
                                    }
                                </Select>

                            )

                        }
                        <ButtonGroup>
                            <Button type="submit" color="success" variant="contained">Sign In Up</Button>
                        </ButtonGroup>
                    </Stack>
                </FormControl>
            </form>
            <SnackToast snackToastOpener={openToastStates.openState} messageText={openToastStates.toastMessages}/>
            {/*<SnackToast snackToastOpener={openToastStates} messageText="Something Went Wrong"/>*/}
        </React.Fragment>


    );
}