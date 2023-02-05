import {FillingBottle} from "react-cssfx-loading";
import * as React from "react";

const Loader = (props) => {
    const size=props.sizeinPx+"px";
    return (
        <div>
            <center>
                <p>{props.message}...</p><br/>
                <FillingBottle color="#818596" duration="2s" width={size}
                                                               height={size}></FillingBottle>
            </center>
        </div>
    );
}
export default Loader;