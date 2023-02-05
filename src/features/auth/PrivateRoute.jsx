import {useJwt} from "react-jwt";
import authTokenStoreFun from "./authToken";
import {Navigate} from 'react-router-dom';
import DashLayout from "../../components/dashComponents/DashLayout";

const PrivateRoute = () => {
    const {decodedToken, isExpired} = useJwt(authTokenStoreFun.tokenGet());
    return isExpired ? <Navigate to="/"/> : <DashLayout/>;
    // return isExpired ? <Navigate to="/"/> : <Outlet/> ;
}
export default PrivateRoute;