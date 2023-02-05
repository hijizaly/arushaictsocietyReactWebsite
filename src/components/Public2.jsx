import styles from "../style";
// import { Billing, CardDeal, Footer, Navbar, Stats, Testimonials, Hero } from "./landPageComponents/";
import Billing from "./landPageComponents/Billing"
import CardDeal from "./landPageComponents/CardDeal"
import Footer from "./landPageComponents/Footer";
import Navbar from "./landPageComponents/Navbar";
import Stats from "./landPageComponents/Stats";
import Testimonials from "./landPageComponents/Testimonials";
import Hero from "./landPageComponents/Hero";
import authTokenStoreFun from "../features/auth/authToken";

// authTokenStoreFun.tokenSet(null);//Store Token in LOCALSTORAGE

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero />
            </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Stats />
                {/*<Business />*/}
                <Billing />
                <CardDeal />
                <Testimonials />
                {/*<Clients />*/}
                {/*<CTA />*/}
                <Footer />
            </div>
        </div>
    </div>
);

export default App;
