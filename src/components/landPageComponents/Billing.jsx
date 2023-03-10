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

const Billing = () => {
        const [dialogOpen, setdialogOpen] = useState(false);

        const dialogOpener = () => {
            setdialogOpen(true);
        };
        const dialogCloser = () => {
            setdialogOpen(false);
        };
        function f() {
            console.log("hey heyh")
        }

        const logIn_ = (<MuiDialog openState={dialogOpen} closeHandle={dialogCloser}>

                <MuiTabs
                    childrenComponents={[<LogInForm closeHandle={dialogCloser}/>,
                        <SignUpForm closeHandle={dialogCloser}/>]}
                    componentsNames={["LogIn", "SignUp"]}
                />
            </MuiDialog>);



        return (<section id="product" className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>

                {/* gradient start */}
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient"/>
                {/* gradient end */}
            </div>

            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Why Arusha ICT Society,<br className="sm:block hidden"/>
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                    aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                    placerat.Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                    aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                    placerat.Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                    aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                    placerat.
                </p>

                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    {logIn_}

                    <Stack direction="row" spacing={5}>
                        <MuiButton color="success" variant="outlined" btnText="Login" action="" size="small"
                                   btnType="iconbtn" btnIcon="fingerprint" handleClick={dialogOpener}/>
                        <MuiButton color="success" variant="outlined" btnText="Sign Up" action="" size="small"
                                   btnType="iconbtn" btnIcon="fingerprint" handleClick={dialogOpener}/>
                    </Stack>

                    {/*<img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />*/}
                    {/*<img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />*/}
                </div>
            </div>
        </section>);
    }
;

export default Billing;
