import { card } from "../../assets";
import styles, { layout } from "../../style";
import Button from "../primaryComponents/Button";
import {useContentsDetailsQuery} from "../../features/contents/contentsSlice";

function CardDeal() {
    let webContentData;
    let fetchedData;
    const contentData = useContentsDetailsQuery('E');

    if(contentData.isSuccess && contentData.data.data.length !== 0){
        fetchedData=contentData.data.data;
        webContentData=(
            <section className={layout.section}>
                <div className={layout.sectionInfo}>
                    <h2 className={styles.heading2}>

                        {fetchedData[0].contentHead}
                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

                        {fetchedData[0].contentBody}
                    </p>

                    <Button styles={`mt-10`}/>
                </div>

                <div className={layout.sectionImg}>
                    {/*<img src={card} alt="billing" className="w-[100%] h-[100%]"/>*/}
                    <img src={fetchedData[1].contentImage} alt="billing" className="w-[100%] h-[100%]"/>
                </div>
            </section>
        );
    }else {
        webContentData="";
    }

    return webContentData;
}

export default CardDeal;
