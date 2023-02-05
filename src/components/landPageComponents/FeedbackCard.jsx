import { quotes } from "../../assets";

// const FeedbackCard = ({ content, member_fullname, title, img }) => (
const FeedbackCard = (props) => {
    // console.dir(props.memberDetails)
  return (<div className="flex justify-between flex-col px-6 py-6 rounded-[8px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card h-40">
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-3">
      {/*{props.memberDetails.member_fullname}*/}
    </p>

    <div className="flex flex-row">
      {/*<img src={img} alt={member_fullname} className="w-[48px] h-[48px] rounded-full" />*/}
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">

          {props.memberDetails.member_fullname}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {props.memberDetails.occupation}
        </p>
      </div>
    </div>
  </div>);
}


export default FeedbackCard;
