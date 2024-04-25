import { Outlet } from "react-router-dom";
import TopHeader from "../Components/TopHeader";
import Footer from "../Components/Footer";

const MainPage = () => {
    return (
        <div className="font-Kanit">       
            <TopHeader></TopHeader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;