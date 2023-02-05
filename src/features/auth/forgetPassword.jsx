import {Button, ButtonGroup, Divider, Stack, TextField, Typography} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import SnackToast from "../../components/primaryComponents/MuiSnack";
import {useForgetPasswordMutation} from "../users/usersApiSlice2";
import Loader from "../../components/primaryComponents/Loader";
import authTokenStoreFun from "./authToken";
import ResetPasswordForm from "./resetPassword";

const ForgetPasswordForm =(props)=>{
    // let currentComponents;

    const [forgetPassword,result]=useForgetPasswordMutation();


    //Toast Massage Notification
    const [openToastStates, setOpenerToast] = useState({
        openState:false,
        toastMessages:""
    });
    function openToastSnack(m) {
        setOpenerToast({openState: true,toastMessages: m});
    }
    //Toast Massage Notification

    function autoCloseDialog() {
        setTimeout(()=>{
            props.closeHandle();
        },7000);
    }

    // authTokenStoreFun.pwdrsturlSet("34df16ca6f5cc905b1d7f1e7aa25279be9c23abcbb880b18ca6bee9ebfadadef");

    const passwordResetRequestSubmission=async (e) => {
        e.preventDefault();

        const nC={
            'email': inputs.email
        }
        try {
           await forgetPassword(nC)
                .unwrap()

        } catch (e) {
            console.log(e);
            openToastSnack(e.data?.message);
        }

    }




    //Inputs
    const [inputs, setInput] = useState({
        email:"",
    });
    const inputsOnChangeOnhandle =(e)=>{
        setInput((prevState => ({...prevState,[e.target.name] : e.target.value})));
    };
    //Inputs

    //submitBtn
    const submitBtn=(
        <ButtonGroup>
            <Button type="submit" color="success" variant="contained" disabled={false}>Reset Password</Button>
        </ButtonGroup>);
    const [submitBtn_,setSubmitBtn]=useState(submitBtn);
    const changeSubmitBtnFun_ = (currentBtnstate) => {
        setSubmitBtn(currentBtnstate);
    }
    // currentComponents=;

    if(result.isLoading) return <Loader sizeinPx="80" message="Sending Email"/>
    // if(result.isSuccess) {
    //     openToastSnack(result.data.message);
    //     // setTimeout(()=>{
    //     //     return <ResetPasswordForm/>
    //     //     // props.closeHandle();
    //     // },7000);
    //
    // }
    // if(result.isSuccess) {
    //     console.dir(result.data)
    // };
    if(result.isSuccess) {
        // console.dir(result.data.message)
        if(result.data.data!==null){
            authTokenStoreFun.pwdrsturlSet(result.data.data.urlId)
            // console.dir(result.data.data.urlId)

        }
    // console.dir(result.data.data);
    // console.log(authTokenStoreFun.pwdrsturlGet());

        return <ResetPasswordForm infoMessage={result.data.message}/>
    };



    return (<React.Fragment>
        <div>
            <form onSubmit={passwordResetRequestSubmission}>
                <Typography>
                    Enter your Email to reset account password
                </Typography>
                <Divider/>

                <Stack direction="column" spacing={4} my={4}>
                    <TextField label="Email" size="small" name="email" value={inputs.email} onChange={inputsOnChangeOnhandle} required/>

                    {submitBtn_}

                </Stack>
            </form>
        </div>

        <SnackToast snackToastOpener={openToastStates.openState} messageText={openToastStates.toastMessages}/>

    </React.Fragment>);
}
export default ForgetPasswordForm;