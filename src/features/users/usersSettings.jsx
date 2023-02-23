import MuiTabs from "../../components/primaryComponents/MuiTabs";
import UserPassChange from "./userPassChange";
import UserAccSettings from "./userAccSetting";
import MuiDialog from "../../components/primaryComponents/MuiDialog";
import * as React from "react";

const UserSettings =(props)=>{
    return (

        <MuiDialog openState={props.dialogOpen} closeHandle={props.dialogCloser}>
            <MuiTabs componentsNames={["Change password","Email Confirmation","Activate account"]} childrenComponents={[<UserPassChange/>,<UserAccSettings/>,<UserAccSettings/>]}/>
        </MuiDialog>
    );
}
export default UserSettings;