import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabContext,TabList,TabPanel} from "@mui/lab";
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs(props) {
    const [value, setValue] = React.useState(()=>{return 0});

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const componentsNames_=props.componentsNames;
    const childrenComponents_=props.childrenComponents;

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                        {componentsNames_.map((eachComponentName,key)=>(
                            <Tab label={eachComponentName} value={key} key={key}/>
                        ))}

                    </TabList>
                </Box>


                {childrenComponents_.map((eachChildComponents,key_)=>(
                    <TabPanel value={key_} key={key_}>{eachChildComponents}</TabPanel>
                ))}

            </TabContext>
        </Box>
    );
}