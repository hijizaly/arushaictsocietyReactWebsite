import * as React from "react";
import {useState} from "react";
import {Button, ButtonGroup, FormControl, Grid, Stack, TextField} from "@mui/material";
// import {useChangePasswordMutation} from "./usersApiSlice2";
import SnackToast from "../../components/primaryComponents/MuiSnack"


const AdminPassChange =()=>{
    // const [resetPassword,result] = useChangePasswordMutation();
    const [openToastStates, setOpenerToast] = useState({
        openState:false,
        toastMessages:""
    });
    function openToastSnack(m) {
        setOpenerToast({openState: true,toastMessages: m});
    }
    const [inputs, setInputs] = useState({
        oldPassword: "",
        newPassword: "",
        rePassword: "",
    });
    const inputsOnChangeOnhandle = (e) => {
        setInputs((prevState => ({...prevState, [e.target.name]: e.target.value})));
    };
    const submitResetPassword = async (e) => {
        e.preventDefault();

        const pS = {
            "oldpassword": inputs.contentHeader,
            "newpassword": inputs.newPassword
        }

        console.log(pS);
        // try {
        //     await resetPassword(pS).unwrap()
        //         .then(()=>{openToastSnack("Email for reset password it was sent in email");})
        //         .then(() => {console.log("it Ok_")})
        // } catch (e) {
        //     console.log(e);
        //     openToastSnack("Sorry Something Went Wrong");
        //
        // }


    }


    return (
    <React.Fragment>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >

            <Grid item xs={3}>
                <form onSubmit={submitResetPassword}>
                    <FormControl>
                        <Stack direction="column" spacing={4} my={5}>
                            <TextField label="Old Password" size="small" value={inputs.contentHeader}
                                       onChange={inputsOnChangeOnhandle}
                                       name="oldPassword" type="password" required/>
                            <Stack direction="row" spacing={2} >
                                <TextField label="New Password" size="small" value={inputs.newPassword}
                                           onChange={inputsOnChangeOnhandle}
                                           name="newPassword" type="password" required/>
                                <TextField label="Retype New Password" size="small" value={inputs.rePassword}
                                           onChange={inputsOnChangeOnhandle}
                                           name="rePassword" type="password" required/>
                            </Stack>

                            <ButtonGroup>
                                <Button type="submit" color="success" variant="contained">Reset Password</Button>
                            </ButtonGroup>
                        </Stack>
                    </FormControl>

                </form>

            </Grid>

        </Grid>


        <SnackToast snackToastOpener={openToastStates.openState} messageText={openToastStates.toastMessages}/>
    </React.Fragment>
    );
}
export default AdminPassChange;