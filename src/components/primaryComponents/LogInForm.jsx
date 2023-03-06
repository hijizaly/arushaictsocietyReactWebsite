import * as React from "react";
import {useState, lazy,Suspense} from "react";
const Divider = lazy(()=>import('@mui/material/Divider'));
const Stack = lazy(()=>import('@mui/material/Stack'));
const Button = lazy(()=>import('@mui/material/Button'));
const ButtonGroup = lazy(()=>import('@mui/material/ButtonGroup'));
const TextField = lazy(()=>import('@mui/material/TextField'));
const SnackToast=lazy(()=>import('./MuiSnack'));
// const  = lazy(()=>import('@mui/material/'))

import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {useLoginMutation} from "../../features/auth/authApiSlice";
import authTokenStoreFun from "../../features/auth/authToken";
const MuiDialog=lazy(()=>import('./MuiDialog'));
const ForgetPasswordForm=lazy(()=>import('../../features/auth/forgetPassword'));
import Loader from "./Loader";


export default function LogInForm(props){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    //RTK hook call
    const [login,result]=useLoginMutation();
    //RTK hook call

    //Toast Massage Notification
    const [openToastStates, setOpenerToast] = useState({
        openState:false,
        toastMessages:""
    });
    function openToastSnack(m) {
        setOpenerToast({openState: true,toastMessages: m});
    }
    //Toast Massage Notification

    const [dialogOpen, setdialogOpen] = useState(false);
    //Inputs
    const [inputs, setInput] = useState({
        email:"",
        password:"",
    });
    const inputsOnChangeOnhandle =(e)=>{
        setInput((prevState => ({...prevState,[e.target.name] : e.target.value})));
    };
    //Inputs
    //
    // forgetpassword
    const [dialogOpenFP, setdialogOpenFP] = useState(false);
    const dialogOpenerFP = () => {
        setdialogOpenFP(true);
        // menuCloser_();
        // props.closeHandle();

    };
    const dialogCloserFP = () => {
        setdialogOpenFP(false);
    };
    // forgetpassword
    //
    //Form submission shit
    const logInSubmitaion=async (e) => {
        e.preventDefault();
        const newInputs = {
            email: inputs.email,
            password: inputs.password
        }

        try {
            const {accessToken} = await login(newInputs).unwrap()
            // dispatch(setCredentials({accessToken}));

            props.closeHandle()
            // authTokenStoreFun.tokenSet(null);//Store Token in LOCALSTORAGE
            authTokenStoreFun.tokenSet(accessToken);//Store Token in LOCALSTORAGE

            navigate('/dash');


            // console.dir(accessToken);
            // console.dir(authTokenStoreFun.tokenGet());


        } catch (err) {
            if(!err.status){
                openToastSnack('No Service Response 😮');
            }else if(err.status===401 || err.status===400){
                openToastSnack('Wrong Username Or Password '+ err.data.error);
            }else{
                // console.log(err);
                openToastSnack('No Service Response 😮');
            }
        }

    };

    //Form submission shit

    let resetForm;
    // if(authTokenStoreFun.pwdrsturlGet()!==null){
    //     resetForm = <ResetPasswordForm/>
    // }else {
       resetForm= <ForgetPasswordForm closeHandle={dialogCloserFP}/>
    // }

    if(result.isLoading) return <Loader message="Loading" sizeinPx="100"/>


    return (
        <React.Fragment>
            <Suspense fallback={Loader}>
                <div>
                    <form onSubmit={logInSubmitaion}>
                        {/*<FormControl noValidate autoComplete="off">*/}
                        <Stack direction="column" spacing={4}>
                            <TextField label="Email" size="small" name="email" value={inputs.email} onChange={inputsOnChangeOnhandle} required/>

                            <TextField label="Password" size="small" type="password" name="password" value={inputs.password} onChange={inputsOnChangeOnhandle}  required/>

                            <ButtonGroup>
                                <Button type="submit" color="success" variant="contained">Login</Button>
                            </ButtonGroup>

                            <Divider/>
                            <Button variant="text" color="info" onClick={dialogOpenerFP}>Forget Password</Button>

                        </Stack>
                    </form>

                </div>

                <SnackToast snackToastOpener={openToastStates.openState} messageText={openToastStates.toastMessages}/>
                < MuiDialog openState={dialogOpenFP} closeHandle={dialogCloserFP}>
                    {resetForm}
                    {/*<ForgetPasswordForm closeHandle={dialogCloserFP}/>*/}
                </MuiDialog>
            </Suspense>


        </React.Fragment>

    );
}