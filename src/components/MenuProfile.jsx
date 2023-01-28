import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "/Profile.jpeg";

const MenuProfile = () => {
    return (
        <div className=" bg-white p-8 rounded-3xl shadow-xl">
            <div className="flex items-center gap-x-5">
                <img src={Profile} alt="" className="w-16 rounded-full" />
                <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col gap-y-2">
                        <p className="text-sm font-medium text-slate-500">
                            I'm a Cashier 💰
                        </p>
                        <p className="font-semibold">Iqbal</p>
                    </div>
                </div>
                <FontAwesomeIcon icon="bell" size="2xl" />
            </div>
        </div>
    );
};

export default MenuProfile;
