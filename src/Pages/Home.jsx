import AllHomePaint from "../Components/AllHomePaint";
import Banner from "../Components/Banner";
import Faq from "../Components/Faq";
import Testimonial from "../Components/Testimonial";

const Home = () => {
    
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <AllHomePaint></AllHomePaint>
            <Testimonial></Testimonial>
            <Faq></Faq>
        </div>
    );
};

export default Home;