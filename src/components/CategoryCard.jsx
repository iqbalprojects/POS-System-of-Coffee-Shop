import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryCard = ({
    title,
    icon,
    categorySelected,
    setCategorySelected,
}) => {
    return (
        <button
            className={
                title === categorySelected
                    ? "bg-amber-800/10 outline outline-2 outline-amber-900 flex flex-col items-center gap-y-5 py-6 w-36 rounded-3xl shadow-lg"
                    : "bg-white opacity-80 outline outline-slate-200 flex flex-col items-center gap-y-5 py-6 w-36 rounded-3xl shadow-lg"
            }
            onClick={() => setCategorySelected(title)}
        >
            <FontAwesomeIcon icon={icon} size="2xl" />
            <p className="font-semibold text-amber-900">{title}</p>
        </button>
    );
};

export default CategoryCard;
