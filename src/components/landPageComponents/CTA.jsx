import styles from "../../style";
import Button from "../primaryComponents/Button";
import {useContentsDetailsQuery} from "../../features/contents/contentsSlice";
import Loader from "../primaryComponents/Loader";
import * as React from "react";

const CTA = () => {
    let webContentData;
    let fetchedData;
    const contentData = useContentsDetailsQuery('G');
    if (contentData.isLoading) webContentData = (
        <div><br/><br/><br/><br/><br/><Loader message="Fetching" sizeinPx="50"/></div>);

    if (contentData.isSuccess && contentData.data.data.length !== 0) {
        fetchedData = contentData.data.data;
        webContentData = (
            <section
                className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
                <div className="flex-1 flex flex-col">
                    <h2 className={styles.heading2}>{fetchedData[0].contentHead}</h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        {fetchedData[0].contentBody}

                    </p>
                </div>

                <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                    <Button/>
                </div>
            </section>
        );
    } else {
        webContentData="";
    }

    return webContentData;
}

export default CTA;
