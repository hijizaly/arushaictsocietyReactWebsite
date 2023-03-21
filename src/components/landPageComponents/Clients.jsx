import { clients } from "../../constants/";
import styles from "../primaryComponents/Button";
import {useContentsDetailsQuery} from "../../features/contents/contentsSlice";
import Loader from "../primaryComponents/Loader";
import * as React from "react";

function Clients(){
    let webContentData;
    let fetchedData;
    const contentData = useContentsDetailsQuery('F');
    if (contentData.isLoading) webContentData = (
        <div><br/><br/><br/><br/><br/><Loader message="Fetching" sizeinPx="50"/></div>);

    if (contentData.isSuccess && contentData.data.data.length !== 0) {
        fetchedData = contentData.data.data;
        webContentData = (
            <section className={`${styles.flexCenter} my-4`}>
                <div className={`${styles.flexCenter} flex-wrap w-full`}>
                    {fetchedData.map((client) => (
                        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
                            {/*<img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain"/>*/}
                            <img src={client.contentImage} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain"/>
                        </div>
                    ))}
                </div>
            </section>
        );
    }else {
        webContentData="";
    }

    return webContentData;
}

export default Clients;
