import CoffeShopLogo from "./icons/CoffeShopLogo";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [navItems, setNavItems] = useState([
        { title: "Home", icon: "home", link: "/" },
        { title: "Menu", icon: "book-open", link: "/menu" },
        { title: "History", icon: "clock", link: "/history" },
        { title: "Wallet", icon: "wallet", link: "/wallet" },
        { title: "Promos", icon: "receipt", link: "/promos" },
        { title: "Setting", icon: "gear", link: "/setting" },
        {
            title: "Logout",
            icon: "arrow-right-from-bracket",
            link: "/landingpage",
        },
    ]);

    const [navSelected, setNavSelected] = useState("");

    useEffect(() => {
        const title_page =
            window.location.pathname.charAt(1).toUpperCase() +
            window.location.pathname.replace(/\//, "").slice(1);

        document.title = `${title_page || "Home"} Page`;
        !title_page ? setNavSelected("Home") : setNavSelected(title_page);
    }, [navSelected]);

    return (
        <section className="bg-white mt-1 flex flex-col py-10 px-3 items-center gap-y-10 rounded-xl shadow-xl">
            <Link to={"/"} onClick={() => setNavSelected("Home")}>
                <CoffeShopLogo className="w-24 aspect-1 cursor-pointer" />
            </Link>
            <NavbarItem {...{ navItems, navSelected, setNavSelected }} />
        </section>
    );
};

export default Navbar;
