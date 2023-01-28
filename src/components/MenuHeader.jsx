import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">Choose Category</h1>
            <label htmlFor="" className="flex items-center relative">
                <input
                    type="text"
                    placeholder="Search category or menu..."
                    className="h-14 w-96 px-5 rounded-xl"
                />
                <FontAwesomeIcon
                    icon="magnifying-glass"
                    size="lg"
                    className="absolute right-5 cursor-pointer"
                />
            </label>
        </div>
    );
};

export default MenuHeader;
