import { features } from "../../constants";
import styles, { layout } from "../../style";
import Button from "../primaryComponents/Button";
import {useContentsDetailsQuery} from "../../features/contents/contentsSlice";

const FeatureCard = (feature) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${feature.id !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={feature.contentImage} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {feature.contentHead}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {feature.contentBody}
      </p>
    </div>
  </div>
);

function Business() {
    let webContentData;
    let fetchedData;
    const contentData = useContentsDetailsQuery('C');
    // console.dir(contentData);
    if (contentData.isSuccess && contentData.data.data.length!==0) {
        fetchedData = contentData.data.data;
        // console.log(fetchedData);

        webContentData = (
            <section id="features" className={layout.section}>
                <div className={layout.sectionInfo}>
                    <h2 className={styles.heading2}>
                        {/*Why Arusha ICT Society, <br className="sm:block hidden"/>*/}
                        {fetchedData[0].contentHead}
                    </h2>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        {fetchedData[0].contentBody}
                        {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut explicabo recusandae tenetur?*/}
                        {/*Dolorem eaque, iste neque nihil obcaecati odio placeat reiciendis rem voluptates.*/}
                        {/*Aspernatur doloribus, eligendi! Cum ea harum nihil!*/}

                    </p>

                    <Button styles={`mt-10`}/>
                </div>

                <div className={`${layout.sectionImg} flex-col`}>
                    {fetchedData.map((feature, index) => (
                        <FeatureCard key={feature.id} {...feature} index={index}/>
                    ))}
                </div>
            </section>
        );
    }

    return webContentData;
}

export default Business;
