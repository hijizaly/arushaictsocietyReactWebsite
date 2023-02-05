import {Link} from 'react-router-dom';
import styles from "../style";


const Public =()=>{
    // return (<div>
    //     <h1>
    //         Public Stuff Here!!!
    //     </h1>
    //
    // </div>);
    return(
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    {/*<Navbar />*/}
                    <div>
                        <h1>Header </h1><hr/>
                    </div>
                </div>
            </div>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <div>
                        <h1>Body Section</h1>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <div>
                        <h1>Footer Section</h1>
                    </div>
                </div>
            </div>

        </div>
        );
}
export default Public;