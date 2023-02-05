// import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'


export default function MuiButton(props) {
    // console.dir(props);
    // if(props.btnType!==undefined && props.btnIcon!==undefined){
    //     // console.log("Icon btn is set");
    //     return (
    //         <IconButton color={props.color}>
    //             <SearchOutlined/>
    //         </IconButton>
    //     );
    // }else {
    //     return (
    //         // <Button variant="text">Text</Button>
    //         <Button variant={props.variant} color={props.color} size={props.size}>{props.btnText}</Button>
    //         // <Button variant="outlined">Outlined</Button>
    //     );
    // }

    return (
        <Button variant={props.variant} color={props.color} size={props.size} onClick={props.handleClick}>{props.btnText}</Button>
    );


}
/*
* variant
*   text
*   outlined
*   contained
* */

/*
* btnType
*   iconBtn
*   normalBtn
*   null
* */

//npm install @mui/material @emotion/react @emotion/styled
//    "@material-tailwind/react": "^1.2.4",