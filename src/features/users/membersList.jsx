import React, { lazy, Suspense } from 'react';
import {styled} from '@mui/material/styles';
const Masonry = lazy(()=>import('@mui/lab/Masonry'));
const Paper = lazy(()=>import('@mui/material/Paper') ) ;
const Accordion = lazy(() => import('@mui/material/Accordion'));
const AccordionSummary = lazy(() => import('@mui/material/AccordionSummary'));
const AccordionDetails = lazy(() => import('@mui/material/AccordionDetails'));
const Typography = lazy(() => import('@mui/material/Typography'));
const ExpandMoreIcon = lazy(() => import('@mui/icons-material/ExpandMore'));
const Card = lazy(()=>import('@mui/material/Card'))
const Divider = lazy(()=>import('@mui/material/Divider'))
const Stack = lazy(()=>import('@mui/material/Stack'))

import {useAllMembersQuery} from "./usersApiSlice2";
import Loader from "../../components/primaryComponents/Loader";
import styles from "../../style";

const StyledAccordion = styled(Accordion)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    color: theme.palette.text.secondary,
}));

export default function MembersList() {

    const {data: allData, error, isLoading, isSuccess, isError} = useAllMembersQuery();
    const loading = (<div><br/><br/><br/><br/><br/><Loader message="Fetching" sizeinPx="50"/></div>);

    let content;
    Object.size = function (obj) {
        let size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    function objCharSize(obj) {
        let allCharSize = Array(obj.length).fill(0);
        for (let i = 0; i < obj.length; i++) {
            if (typeof obj[i]) {
                // console.log(Object.values(obj[i]))
                let eachObjValue = Object.values(obj[i])
                let fullTotal = 0;

                for (let h = 0; h < eachObjValue.length; h++) {
                    // console.log(eachObjValue[h]);
                    if (Array.isArray(eachObjValue[h])) {
                        // console.dir(h);
                        // console.dir(eachObjValue[h]);
                        // objCharSize(eachObjValue[h]);


                    }
                    eachObjValue[h].length !== undefined ? fullTotal += eachObjValue[h].length : fullTotal += 1
                }
                allCharSize[i] += fullTotal;
                // console.log(fullTotal);
            }
        }
        return allCharSize;
    }

    if (isLoading) content = loading;
    if (isError) content = <h4>{error?.data?.message}</h4>




    if (isSuccess) content = (
        <Suspense fallback={loading}>
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <Masonry columns={4} spacing={2}>
                    {allData.data.map((eachMembers, index) => (
                        <Paper key={index} elevation={24}>
                            <StyledAccordion sx={{minHeight: objCharSize(allData.data)[index] * 2}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Card sx={{p: 2, m: 1, width: '99%'}}>

                                        <Stack direction="column" spacing={-1}>
                                            <Typography variant="caption"
                                                        sx={{fontStyle: 'italic'}}>Fullname:</Typography>
                                            <Typography variant="subtitle1" sx={{
                                                fontWeight: 'bold',
                                                fontSize: 19,
                                                textTransform: 'uppercase'
                                            }}>
                                                {eachMembers.member_fullname}
                                            </Typography></Stack>


                                        <Divider/>
                                        <Stack direction="column" spacing={-1}>
                                            <Typography variant="caption"
                                                        sx={{fontStyle: 'italic'}}>Skill:</Typography>
                                            <Typography variant="overline" sx={{fontWeight: 'bold'}}>
                                                {eachMembers.occupation}

                                            </Typography></Stack>
                                    </Card>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography variant="caption" sx={{
                                        fontStyle: 'italic',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        fontSize: 15,
                                    }}>Other Skills</Typography>

                                    <Divider/>
                                    <Stack direction="column" spacing={0.5}>
                                        {eachMembers.other_skills.map((eachOtherSkill, index) => (

                                            <Typography variant="overline"
                                                        sx={{fontWeight: 'bold', fontSize: 13}}
                                                        key={index}>{eachOtherSkill.other_occupation_name}</Typography>

                                        ))}
                                    </Stack>
                                </AccordionDetails>
                            </StyledAccordion>
                        </Paper>
                    ))}
                </Masonry>
            </section>
        </Suspense>
    );

    return (
        <div className="bg-primary w-full h-screen overflow-hidden p-6">
            <div className={`bg-primary ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="absolute z-[0] w-[40%] h-[40%] -left-[10%] rounded-full white__gradient bottom-40"/>
                    <div className="absolute z-[0] w-[60%] h-[60%] -right rounded-full pink__gradient bottom-40"/>

                    <div className="flex flex-row justify-between items-center w-full">
                        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                            All Members join To
                            {/*<br className="sm:block hidden" />{" "}*/}
                            <span className="text-gradient"> Us</span>{" "}
                        </h1>

                    </div>
                    {content}
                </div>
            </div>
        </div>

    );
}