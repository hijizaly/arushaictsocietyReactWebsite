
import {useNavigate,useLocation} from 'react-router-dom';
import Button from "@mui/material/Button";
import MuiButton from "../MuiButton";

const DashFooter = () => {
    const navigate=useNavigate();
    const {pathname} =useLocation();
    const onGoHomeClicked=()=>navigate('/dash');

    let goHomeButton=null;
    if(pathname !== '/dash'){
        goHomeButton=(
            <MuiButton variant="outlined" handleClick={onGoHomeClicked}>Home</MuiButton>
        );
    }

    const content=(
        <div><hr/>
            <h1>Dash FooterFOOTER</h1>
            {goHomeButton}
            <p>Current User:</p>
            <p>Status:</p>
        </div>
    );

    return content;
}
export default DashFooter;