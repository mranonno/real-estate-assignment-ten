import { ToastContainer } from "react-toastify";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
AOS.init();
const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    );
};

export default Root;