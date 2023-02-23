import styles from "../../style";
import React, {lazy, Suspense, useState} from "react";
import {Button, ButtonGroup, Card, Divider, Grid, Stack, TextField} from "@mui/material";
import {useAdminLoginMutation} from "../auth/authApiSlice";
import Loader from "../../components/primaryComponents/Loader";
import {useNavigate} from "react-router-dom";
import authTokenStoreFun from "../auth/authToken";

const SnackToast = lazy(() => import('../../components/primaryComponents/MuiSnack'));


const AdminLoginPage = () => {
    //RTK hook call
    const [login, result] = useAdminLoginMutation();
    //RTK hook call

    //Toast Massage Notification
    const [openToastStates, setOpenerToast] = useState({
        openState: false,
        toastMessages: ""
    });

    function openToastSnack(m) {
        setOpenerToast({openState: true, toastMessages: m});
    }

    let contents;
    //Toast Massage Notification

    //Loader Here
    const Loader_ = (<Loader message="Loading" sizeinPx="60"/>);
    //Loader Here


    const [inputs, setInput] = useState({
        email: "",
        password: "",
    });
    const inputsOnChangeOnhandle = (e) => {
        setInput((prevState => ({...prevState, [e.target.name]: e.target.value})));
    };

    const navigate = useNavigate();


    const logInSubmitaion = async (e) => {
        e.preventDefault();
        const newInputs = {
            email: inputs.email,
            password: inputs.password
        }


        try {
            const {accessToken} = await login(newInputs).unwrap();

            navigate('/admin-dash');
            authTokenStoreFun.tokenSet(accessToken);//Store Token in LOCALSTORAGE

        } catch (err) {
            if (!err.status) {
                openToastSnack('No Service Response 😮_');
            } else if (err.status === 401 || err.status === 400) {
                openToastSnack('Wrong Username Or Password ' + err.data.error);
            } else {
                // console.log(err);
                openToastSnack('No Service Response 😮__');
            }
        }


    }
    if (result.isLoading) contents = Loader_;
    // if (result.isSuccess) contents =
        // console.dir(result);
        contents = (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{minHeight: '100vh'}}
            >

                <Grid item xs={3}>

                    <Card sx={{px: 3, py: 7, m: 1, width: '100%'}} elevation={24}
                          display="flex"
                          alignItems="center"
                          justifyContent="center">

                        <div>
                            <form onSubmit={logInSubmitaion}>
                                {/*<FormControl noValidate autoComplete="off">*/}
                                <Stack direction="column" spacing={4}>
                                    <TextField label="Email" size="small" name="email"
                                               value={inputs.email}
                                               onChange={inputsOnChangeOnhandle} required/>

                                    <TextField label="Password" size="small" type="password"
                                               name="password"
                                               value={inputs.password} onChange={inputsOnChangeOnhandle}
                                               required/>

                                    <ButtonGroup>
                                        <Button type="submit" color="success"
                                                variant="contained">Login</Button>
                                    </ButtonGroup>

                                    <Divider/>

                                    <Button variant="text" color="info">Forget Password</Button>

                                </Stack>
                            </form>

                        </div>
                    </Card>
                </Grid></Grid>);


    return (
        <React.Fragment>
            <Suspense fallback={Loader_}>
                <div className="bg-primary w-full h-screen overflow-hidden p-6">
                    <div className={`bg-primary ${styles.flexCenter}`}>
                        <div className={`${styles.boxWidth}`}>
                            <div
                                className="absolute z-[0] w-[40%] h-[40%] -left-[10%] rounded-full white__gradient bottom-40"/>
                            <div
                                className="absolute z-[0] w-[60%] h-[60%] -right rounded-full pink__gradient bottom-40"/>

                            {/*<div className="flex flex-row justify-between items-center w-full">*/}
                            {/*    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">*/}
                            {/*        All Members join To*/}
                            {/*        /!*<br className="sm:block hidden" />{" "}*!/*/}
                            {/*        <span className="text-gradient"> Us</span>{" "}*/}
                            {/*    </h1>*/}

                            {/*</div>*/}

                            {contents}


                        </div>
                    </div>
                </div>
                <SnackToast snackToastOpener={openToastStates.openState} messageText={openToastStates.toastMessages}/>
            </Suspense>
        </React.Fragment>

    );
}
export default AdminLoginPage;