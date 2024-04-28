import AllHomePaint from "../Components/AllHomePaint";
import Banner from "../Components/Banner";
import Faq from "../Components/Faq";

const Home = () => {
    
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <AllHomePaint></AllHomePaint>
            <Faq></Faq>
        </div>
    );
};

export default Home;