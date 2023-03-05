import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import {Divider, Toolbar} from "@mui/material";
import TableToolBar from "./MuiTableToolBar";


export default function DataTable(props) {
    const tableAction=props.tableAction;
    const dataForTable = props.arrayOfData
    const dataColumns=Object.keys(dataForTable[0]);
    const tableColumnsNames= props.tableColumsNames
    const tableColumnsDataType=[]; //columsDataTyep
    const tableFieldWidth=Array(Object.values(dataForTable[0]).length).fill(0);
    function createColumnsRows(field,headerName,type,width){
        return{
            field:field,
            headerName:headerName,
            type:type,
            width:width
        }
    }
    const allColumns=[];
    // const selectedItems=[];
    // function f(eachIds) {
    //     // selectedItems.push(eachIds);
    //     eachIds=selectedItems;
    //     console.log(selectedItems);
    // }

    for(let i=0;i<Object.values(dataForTable[0]).length;i++){
        if(!isNaN(Object.values(dataForTable[0])[i])){
            tableColumnsDataType.push('number');
        }else tableColumnsDataType.push('');
    }
    for(let j=0;j<Object.values(dataForTable).length;j++){
        let J=Object.values(dataForTable[j]);
        for(let k=0;k<J.length;k++){
            let K= J[k].toString();
            tableFieldWidth[k]= K.length>Number(tableFieldWidth[k]) ? K.length*14: tableFieldWidth[k];
            // tableFieldWidth[k]= K.length>Number(tableFieldWidth[k]) ? lenthTwick(K.length): tableFieldWidth[k];
        }
    }
    // function lenthTwick(L){
    //     let M;
    //     return M=L.length>=5 ? L.length*14:L.length;
    // }
    for (let h=0;h<Object.values(dataForTable[0]).length;h++){
        let newC = createColumnsRows(dataColumns[h],tableColumnsNames[h],tableColumnsDataType[h],tableFieldWidth[h]);
        allColumns.push(newC);
    }
    const toolBar=(<Toolbar>
        <Tooltip title="Delete">
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>

    </Toolbar>);

    // console.log(allColumns);
    // console.log(tableFieldWidth);
    // tableAction()
    // console.log(selectedItems);

    const NewToolbar=<TableToolBar/>

    return (

        <div style={{ height: 400, width: '100%' }}>

            <DataGrid
                rows={dataForTable}
                getRowId={(dataForTable)=>dataForTable.skill_id}
                columns={allColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onSelectionModelChange={(ids)=>{
                    tableAction(ids);
                }
                }

                components={{
                    // Toolbar:NewToolbar

                }}
            />
        </div>
    );
}
