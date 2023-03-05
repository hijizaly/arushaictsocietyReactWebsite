import {useState} from "react";
import {Divider, Toolbar} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {Add} from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import * as React from "react";
import MuiDialog from "../../components/primaryComponents/MuiDialog";
import {useAllSkillsQuery} from "./skillsApiSlice";
import DataTable from "../../components/primaryComponents/MuiTableGride";

const SkillsManager = () => {
    const allSkillsAvailable = useAllSkillsQuery();

    const [dialogOpen, setdialogOpen] = useState(false);
    const dialogOpener = () => {
        setdialogOpen(true);
    };
    const dialogCloser = () => {
        setdialogOpen(false);
    };

    function goEnd() {
        console.log("hey");
    }

    let content;
    if (allSkillsAvailable.isSuccess) content = (<DataTable
        arrayOfData={allSkillsAvailable.data.data}
        tableColumsNames={['id','skill_id','skill_name', 'Abbreviation']}
        tableAction={tableEachAction}
    />);

    function tableEachAction(ids) {
        console.log(ids);
    }
    console.log(allSkillsAvailable.data);

    return (
        <React.Fragment>
            <Toolbar>
                <Tooltip title="Add">
                    <IconButton onClick={dialogOpener}>
                        <Add/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton onClick={goEnd}>
                        <DeleteIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                    <IconButton>
                        <EditOutlinedIcon/>
                    </IconButton>
                </Tooltip>

            </Toolbar>


            <Divider/>


            {/*<DataTable arrayOfData={allData.data}*/}
            {/*           tableColumsNames={['id', 'Full Name', 'Email', 'Phone', 'Occupation', 'DOB']}*/}
            {/*           tableAction={tableActionFunction}*/}
            {/*/>*/}

            {/*<DataTable*/}
            {/*    arrayOfData={allSkillsAvailable.data.data}*/}
            {/*    tableColumsNames={['Skill Name','Skill Id','Abbreviation']}*/}
            {/*    tableAction={tableEachAction}*/}
            {/*/>*/}
            {content}



            <MuiDialog openState={dialogOpen} closeHandle={dialogCloser}>
            </MuiDialog>

        </React.Fragment>
    );
}
export default SkillsManager;