import { Outlet } from "react-router-dom";
import TopHeader from "../Components/TopHeader";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainPage = () => {
    return (
        <div className="font-Kanit">       
            <TopHeader></TopHeader>
            <div className="container mx-auto">
                 <Navbar></Navbar>
                 <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;