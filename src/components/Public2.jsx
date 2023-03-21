import styles from "../style";
import Billing from "./landPageComponents/Billing"
import CardDeal from "./landPageComponents/CardDeal"
import Footer from "./landPageComponents/Footer";
import Navbar from "./landPageComponents/Navbar";
import Stats from "./landPageComponents/Stats";
import Testimonials from "./landPageComponents/Testimonials";
import Hero from "./landPageComponents/Hero";
import authTokenStoreFun from "../features/auth/authToken";
import Business from "./landPageComponents/Business";
import Clients from "./landPageComponents/Clients";
import CTA from "./landPageComponents/CTA";
import {useAllMembersQuery} from "../features/users/usersApiSlice2";
import {useAllContentsIdsQuery, useAllContentsQuery} from "../features/contents/contentsSlice";

// authTokenStoreFun.tokenSet(null);//Store Token in LOCALSTORAGE

function App(){
    // const {data: allData, error, isLoading, isSuccess, isError} = useAllContentsQuery();
    // const allCompIds=useAllContentsIdsQuery();
    // let allContentIds;
    // if(allCompIds.isSuccess && isSuccess) {
    //     allContentIds = allCompIds.data.data;
    //     // console.log(allContentIds)
    //     // console.log(allData.data.length)
    //     for (let i = 0; i < allData.data.length; i++){
    //         // if(allData.data[i].componentMainId === array.IsArray){
    //         //
    //         // }
    //         // console.log(allData.data[i].componentMainId);
    //         // if()
    //
    //     }
    // }




    // if(isSuccess) {
    //     console.dir(allData[0].componentMainId);
    // }
    // console.log(isSuccess);


    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero /> {/*needed*/}
                    {/*<ContentsComponents componentId="H"/>*/}


                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <hr/>

                    stats
                    <Stats />
                    <hr/>
                    business
                    <Business />{/*new One*/}
                    <hr/>

                    billing
                    <Billing />
                    <hr/>

                    carddeal
                    <CardDeal />
                    <hr/>

                    testimonials
                    {/*<Testimonials />*/}
                    <hr/>

                    clients
                    <Clients />{/*new One*/}
                    <hr/>

                    cta
                    <CTA />{/*new One*/}
                    <Footer />
                </div>
            </div>
        </div>
    )

}


export default App;
