import {stats} from "../../constants";
import styles from "../../style";
import {useAllMembersQuery} from "../../features/users/usersApiSlice2";
import Loader from "../primaryComponents/Loader";
import * as React from "react";

const Stats = () => {
    const {data: allData, error, isLoading, isSuccess, isError} = useAllMembersQuery();
    const loading = (<div><br/><br/><br/><br/><br/><Loader message="Fetching" sizeinPx="50"/></div>);
    let content;
    if (isLoading) content = loading;
    if (isError) content = <h4>{error?.data?.message}</h4>
    if(isSuccess) content=(stats.map((stat) => (
            <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
                <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                    {stat.value}
                </h4>
                <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                    {stat.title}
                </p>
            </div>
        )));


    return (
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
            {content}
        </section>
    );
}

export default Stats;
