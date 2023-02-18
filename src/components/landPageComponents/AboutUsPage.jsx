import styles from "../../style";
import React, { lazy, Suspense } from 'react';
const InfoOutlinedIcon = lazy(()=>import('@mui/icons-material/InfoOutlined'));


const AboutUsPage = () => {
    return (
        <Suspense fallback="loading...">
        <div className="bg-primary w-full h-screen overflow-hidden p-6">
            <div className={`bg-primary ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                            <div className="absolute z-[0] w-[40%] h-[40%] -left-[10%] rounded-full white__gradient bottom-40"/>


                            <div className="flex flex-row justify-between items-center w-full">
                                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                                    About
                                    {/*<br className="sm:block hidden" />{" "}*/}
                                    <span className="text-gradient"> Us</span>{" "}
                                </h1>

                            </div>

                            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                                {/*Payment Method.*/}
                            </h1>
                            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                                Arusha ICT Society is a group of ICT enthusiasts currently in Arusha, with aim to join
                                members
                                for their skills betterment, living standards & the surrounding Tanzania community at
                                large.
                                It’s a non-governmental Organization, not affiliated to any Religious or Political
                                entity..Arusha ICT Society is a group of ICT enthusiasts currently in Arusha, with aim to join
                                members
                                for their skills betterment, living standards & the surrounding Tanzania community at
                                large.
                                It’s a non-governmental Organization, not affiliated to any Religious or Political
                                entity..Arusha ICT Society is a group of ICT enthusiasts currently in Arusha, with aim to join
                                members
                                for their skills betterment, living standards & the surrounding Tanzania community at
                                large.
                                It’s a non-governmental Organization, not affiliated to any Religious or Political
                                entity..
                            </p>
                        </div>

                        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                            {/*<img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>*/}
                            <InfoOutlinedIcon sx={{width:500,height:500}}/>

                            {/* gradient start */}
                            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
                            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"/>
                            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
                            {/* gradient end */}
                        </div>

                    </section>
                </div>
            </div>
        </div>
        </Suspense>
    );
}
export default AboutUsPage;