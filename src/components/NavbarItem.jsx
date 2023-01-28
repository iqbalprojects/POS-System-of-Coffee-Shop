import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavbarItem = ({ navItems, navSelected, setNavSelected }) => {
    return (
        <section className="flex flex-col gap-y-5">
            {navItems.map((navItem, index) => (
                <Link
                    key={index}
                    to={navItem.link}
                    className={
                        navItem.title === navSelected
                            ? "bg-amber-900 px-3 py-5 text-white rounded-2xl border border-gray-300 shadow-lg cursor-pointer"
                            : "bg-white px-3 py-5 text-black/50 rounded-2xl cursor-pointer"
                    }
                    onClick={() => setNavSelected(navItem.title)}
                >
                    <div className="flex flex-col items-center gap-y-1.5">
                        <FontAwesomeIcon icon={navItem.icon} size="xl" />
                        <span className="font-semibold">{navItem.title}</span>
                    </div>
                </Link>
            ))}
        </section>
    );
};

export default NavbarItem;
