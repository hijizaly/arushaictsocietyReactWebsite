import * as React from "react";
import {useState} from "react";
import {Button, ButtonGroup, Divider, Stack, TextField} from "@mui/material";
import {Base64} from 'js-base64';
import Loader from "../../components/primaryComponents/Loader";
import authTokenStoreFun from "./authToken";

import {SHA256, enc} from 'crypto-js';
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";
import {useResetForgetPasswordMutation} from "../users/usersApiSlice2";
import SnackToast from "../../components/primaryComponents/MuiSnack";


const ResetPasswordForm = (props) => {
    const [resetForgetPassword,result]=useResetForgetPasswordMutation();
    const [page, setPage] = useState(0);


    // const [openToastStates, setOpenerToast] = useState({
    //     openState:false,
    //     toastMessages:""
    // });
    function openToastSnack() {
        setPage(page + 2);
        // setOpenerToast({openState: true,toastMessages: m});
    }

    function handleSubmit() {
        setPage(page + 1);
    }

    async function resetCodeSubmission(e) {
        e.preventDefault();
        const newCode = {
            secrete_code: inputs.code,
            payload: Base64.encode(inputs.newPassword)
        }
        console.log(newCode);
        console.log(authTokenStoreFun.pwdrsturlGet());
        try {
            await resetForgetPassword({urlId: authTokenStoreFun.pwdrsturlGet(), credentials: newCode}).unwrap()
        } catch (e) {
            console.log(e)
        }

    }
    // if(result.isLoading) openToastSnack();
    // if(result.isSuccess) openToastSnack("result HERE");
    // openToastSnack

    if(result.isSuccess){
        // console.log(result);
        // openToastSnack()
        props.autoClose();
        authTokenStoreFun.pwdrsturlRes();
    }

    const [inputs, setInput] = useState({
        code: "",
        newPassword: ""
    });
    const inputsOnChangeOnhandle = (e) => {
        setInput((prevState => ({...prevState, [e.target.name]: e.target.value})));
    };
    const firstComponents = (inputs_, inputsOnChangeHandler_) => {
        return (<React.Fragment>
            <div>
                <Stack direction="column" spacing={2} px={4}>

                    <p m="2">
                        {props.infoMessage}
                    </p>
                    <Divider/>
                    <p m="2">
                        Enter the Screat code from you Email
                    </p>
                    <Divider/>
                    {/*<form onSubmit={resetCodeSubmission}>*/}

                    <Stack direction="row" spacing={2}>

                        <TextField label="Screat code" size="small" name="code" value={inputs_.code}
                                   onChange={inputsOnChangeHandler_} inputProps={{
                            maxLength: 6,
                        }} autoComplete="off" required/>
                        {/*<ButtonGroup>*/}
                        {/*<Button type="submit" color="success" variant="contained" disabled={false}>Submit Reset Code</Button>*/}
                        {/*</ButtonGroup>*/}
                    </Stack>

                    {/*</form>*/}
                </Stack>

            </div>
        </React.Fragment>);
    }
    const secondComponents = (inputs_, inputsOnChangeHandler_) => {
        return (<React.Fragment>
            <div>
                {/*<form onSubmit={resetCodeSubmission}>*/}
                {/*<form>*/}
                <form onSubmit={resetCodeSubmission}>


                    <Stack direction="column" spacing={3} my={3}>

                        <TextField label="Password" size="small" name="newPassword"
                                   type="password" value={inputs_.newPassword} onChange={inputsOnChangeHandler_}
                                   required/>
                        <TextField label="Re-type Password" size="small" name="newPassword"
                                   type="password" value={inputs_.newPassword} onChange={inputsOnChangeHandler_}
                                   required/>
                        <Divider/>
                        <Button type="submit" color="success" variant="outlined" disabled={false}>Change
                            Password</Button>
                    </Stack>

                </form>
            </div>
        </React.Fragment>);
    }
    const toastMessageComponents = (message) => {
       return (<SnackToast snackToastOpener={true} messageText={message}/>);
    }
    const loadingComponents = () => {
      return(<Loader sizeinPx="80" message="Please wait"/>);
    }

    const currentComponent = () => {
        switch (page) {
            case 0:
                return firstComponents(inputs, inputsOnChangeOnhandle);
            case 1:
                return secondComponents(inputs, inputsOnChangeOnhandle);
            case 2:
                return toastMessageComponents("bla bla...");
            case 3:
                return loadingComponents();
            default:
                return firstComponents(inputs, inputsOnChangeOnhandle);
        }
    }

    return (
        <>
            {currentComponent()}
            <br/>
            {page === 0 ? (<Button onClick={handleSubmit} >Next<ArrowForwardIos sx={{ml: 2}}/></Button>) : (<Button onClick={() => setPage(page - 1)}>Back<ArrowBackIos sx={{ml: 2}}/></Button>)}
            {/*<Button onClick={handleSubmit}>*/}
            {/*    {page === 0 ? "Next" : "Previous"}*/}
            {/*</Button>*/}

        </>
    );
    // return firstComponents();
}
export default ResetPasswordForm;