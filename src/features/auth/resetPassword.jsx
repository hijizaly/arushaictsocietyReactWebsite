import * as React from "react";
import {useState} from "react";
import {Button, ButtonGroup, Divider, Stack, TextField} from "@mui/material";
import {Base64} from 'js-base64';
import Loader from "../../components/primaryComponents/Loader";
import authTokenStoreFun from "./authToken";
// import sha256 from 'crypto-js/sha256';
// import crypto from 'crypto-js';
import {SHA256, enc} from 'crypto-js';
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";
import {useResetForgetPasswordMutation} from "../users/usersApiSlice2";


const ResetPasswordForm = (props) => {
    const [resetForgetPassword,result]=useResetForgetPasswordMutation();



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



        // const hashSum_sha1=crypto.createHash('sha1');
        // // const hashSum_sha1=crypto.createHash('sha256');
        // hashSum_sha1.update("samaki");
        // let hex=hashSum_sha1.digest('hex');


        // console.dir(SHA256(newCode.code).toString(enc.Hex));
        // console.log(authTokenStoreFun.pwdrsturlGet());
        // return <Loader sizeinPx="80" message="Confirm Code"/>

        // if(SHA256(newCode.code)===authTokenStoreFun.pwdrsturlGet()){
        //     console.log("Done");
        //
        // }else {
        //     console.log("No Done");
        // }


        // setTimeout(()=>{
        //
        //
        //     // return <Loader sizeinPx="80" message="Sending Email"/>
        //
        // },1000)


        // let nn=Base64.encode('samakisamakisamaki');
        // console.log(nn);


    }
    // if(result.isLoading) return <Loader sizeinPx="80" message="Please wiat"/>
    if(result.isSuccess){
        // props.closeH
        console.dir(result);
        props.autoClose();
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

    const [page, setPage] = useState(0);

    function handleSubmit() {
        setPage(page + 1);
    }

    const currentComponent = () => {
        switch (page) {
            case 0:
                return firstComponents(inputs, inputsOnChangeOnhandle);
            case 1:
                return secondComponents(inputs, inputsOnChangeOnhandle);
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