import {useAllMembersQuery} from "./usersApiSlice2";
import {FillingBottle} from "react-cssfx-loading";
import DataTable from "../../components/primaryComponents/MuiTableGride"
import EnhancedTable from "../../components/primaryComponents/MuiTablelExp"
import TableToolBar from "../../components/primaryComponents/MuiTableToolBar";
import * as React from "react";
import Loader from "../../components/primaryComponents/Loader";


// import {useGetUsersQuery} from "./usersApiSlice";

const UsersList = () => {

    const { data:allData, error, isLoading, isSuccess, isError } = useAllMembersQuery();
    const loading = (<Loader message="Sending Email" sizeinPx="50"/>);


    if(isLoading===true){
        console.log("Is Fetchijust waiting");
    }else {
        // console.log(allData.data);
    }
    let selectedItems=[];
    function tableActionFunction(ids){
        console.log("What i get from child")
        console.log(ids)
        selectedItems=ids;
    }
    console.dir(isError);
    console.dir(error);


    let content
    if(isLoading) content = loading;

    if(isError) content = <p>{error?.data?.message}</p>

    if(isSuccess) content = <DataTable arrayOfData={allData.data} tableColumsNames={['id','Full Name','Email','Phone','Occupation','DOB']} tableAction={tableActionFunction}/>;
    if(isSuccess) {
        Object.size = function(obj) {
            let size = 0,
                key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };

        // let size = Object.size(allData.data[1]);
        // console.dir(size);

        console.log(allData.data[1]);

        // let data= JSON.parse(allData.data[0]);
        // console.dir(data.length);
    }
    // content = <EnhancedTable/>
    // content=<> <TableToolBar/> </>

    return content;
}
export default UsersList;