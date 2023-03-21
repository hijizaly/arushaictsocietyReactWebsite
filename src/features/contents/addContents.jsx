import {useState} from "react";
import {Button, ButtonGroup, FormControl, Grid, Stack, TextField} from "@mui/material";

const ContentsAdder =()=>{
    const inputsOnChangeOnhandle = (e) => {
        setInputs((prevState => ({...prevState, [e.target.name]: e.target.value})));
    }
    const [inputs, setInputs] = useState({
        contentHeader: "",
        contentBody: "",
        rePassword: "",
    });


    function submitResetPassword() {
        console.log("so much")
    }

    const uiContent=(

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
                        <TextField label="Content Header" size="small" value={inputs.contentHeader}
                                   onChange={inputsOnChangeOnhandle}
                                   name="oldPassword" type="password" />
                        <Stack direction="row" spacing={2} >
                            <TextField label="New Password" size="small" value={inputs.contentBody}
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

    </Grid>);


    return uiContent;
}
export default ContentsAdder;