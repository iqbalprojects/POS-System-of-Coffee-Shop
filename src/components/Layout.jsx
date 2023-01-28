import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <section className="h-full bg-slate-100 flex gap-x-14">
            <Navbar />
            <Outlet />
        </section>
    );
};

export default Layout;
