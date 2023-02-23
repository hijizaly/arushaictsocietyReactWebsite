import MuiTabs from "../../components/primaryComponents/MuiTabs";
import MuiDialog from "../../components/primaryComponents/MuiDialog";
import * as React from "react";
import UserAccSettings from "../users/userAccSetting";
import AdminPassChange from "./adminPassChange";

const AdminSettings = (props) => {
    return (

        <MuiDialog openState={props.dialogOpen} closeHandle={props.dialogCloser}>
            <MuiTabs componentsNames={["Change password", "Email Confirmation", "Activate account", "Privilege Trans"]}
                     childrenComponents={[<AdminPassChange/>, <UserAccSettings/>, <UserAccSettings/>,
                         <UserAccSettings/>]}/>
        </MuiDialog>
    );
}
export default AdminSettings;