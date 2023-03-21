import {apple, bill, google} from "../../assets";
import styles, {layout} from "../../style";
import MuiButton from "../primaryComponents/MuiButton";
import {Stack} from "@mui/material";
import {useState} from "react";
import MuiDialog from "../primaryComponents/MuiDialog";
import * as React from "react";
import MuiTabs from "../primaryComponents/MuiTabs";
import LogInForm from "../primaryComponents/LogInForm";
import SignUpForm from "../primaryComponents/SignUpForm";
import {useContentsDetailsQuery} from "../../features/contents/contentsSlice";
import Loader from "../primaryComponents/Loader";

function Billing() {
    let webContentData;
    let fetchedData;
    const contentData = useContentsDetailsQuery('D');

    const [dialogOpen, setdialogOpen] = useState(false);

    const dialogOpener = () => {
        setdialogOpen(true);
    };
    const dialogCloser = () => {
        setdialogOpen(false);
    };



    const logIn_ = (<MuiDialog openState={dialogOpen} closeHandle={dialogCloser}>

        <MuiTabs
            childrenComponents={[<LogInForm closeHandle={dialogCloser}/>,
                <SignUpForm closeHandle={dialogCloser}/>]}
            componentsNames={["LogIn", "SignUp"]}
        />
    </MuiDialog>);

    if (contentData.isLoading) webContentData = (
        <div><br/><br/><br/><br/><br/><Loader message="Fetching" sizeinPx="50"/></div>);


    if(contentData.isSuccess && contentData.data.data.length!==0){
        fetchedData=contentData.data.data;
        // console.log(fetchedData[0].contentImage)
        webContentData=(
            <section id="product" className={layout.sectionReverse}>
                <div className={layout.sectionImgReverse}>
                    <img src={fetchedData[0].contentImage} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>

                    {/* gradient start */}
                    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
                    <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient"/>
                    {/* gradient end */}
                </div>

                <div className={layout.sectionInfo}>
                    <h2 className={styles.heading2}>
                        {fetchedData[1].contentHead}
                        {/*Why Arusha ICT Society,<br className="sm:block hidden"/>*/}
                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        {fetchedData[1].contentBody}

                    </p>

                    <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                        {logIn_}

                        <Stack direction="row" spacing={5}>
                            <MuiButton color="success" variant="outlined" btnText="Login" action="" size="small"
                                       btnType="iconbtn" btnIcon="fingerprint" handleClick={dialogOpener}/>
                            <MuiButton color="success" variant="outlined" btnText="Sign Up" action="" size="small"
                                       btnType="iconbtn" btnIcon="fingerprint" handleClick={dialogOpener}/>
                        </Stack>

                    </div>
                </div>
            </section>)
    }else {
        webContentData="";
    }


    return webContentData;
}
;

export default Billing;
