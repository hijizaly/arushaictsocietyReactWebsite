import Hero from "../../components/landPageComponents/Hero";
import Billing from "../../components/landPageComponents/Billing";
import CardDeal from "../../components/landPageComponents/CardDeal";

const ContentsComponents =(props)=>{
    // return (
    // <div>ContentsComponents</div>
    // );
    // console.dir(props.componentId)

    switch (props.componentId) {
        case 'H':
            return (<Hero/>);
        case 'B':
            return (<Billing/>);
        case 'C':
            return (<CardDeal />);
        // case 'D':
        //     return ();

    }
}
export default ContentsComponents;
                