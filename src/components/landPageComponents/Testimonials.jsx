import { feedback } from "../../constants";
import styles from "../../style";
import FeedbackCard from "./FeedbackCard";
import {useAllMembersQuery} from "../../features/users/usersApiSlice2";
import Loader from "../primaryComponents/Loader";
import * as React from "react";

const Testimonials = () => {
    const allMembers=useAllMembersQuery();
    // const { data:allData, error, isLoading, isSuccess, isError } = useAllMembersQuery();

    // console.dir(allMembers);
    if(allMembers.isLoading) return (<Loader message="Fetching All Members" sizeinPx="50"/>);
    if(allMembers.isSuccess) return (  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full white__gradient bottom-40" />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className={styles.heading2}>
                All Technicians  <br className="sm:block hidden" /> join us...
            </h2>
            {/*<div className="w-full md:mt-0 mt-6">*/}
            {/*  <p className={`${styles.paragraph} text-left max-w-[450px]`}>*/}
            {/*    Everything you need to accept card payments and grow your business*/}
            {/*    anywhere on the planet.*/}
            {/*  </p>*/}
            {/*</div>*/}
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] overflow-y-auto h-96">
            {allMembers.data.data.map((eachMember,key)=>(<FeedbackCard memberDetails={eachMember}/>))}
            {/*{feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}*/}
        </div>
    </section>);
    // if(allMembers.isSuccess) console.dir(allMembers.data.data);

    // return ();

}

export default Testimonials;
