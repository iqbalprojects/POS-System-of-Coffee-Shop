import CategoryCard from "./CategoryCard";

const CategoryCards = (props) => {
    const { categories } = props;
    return (
        <div className="flex justify-between mt-10">
            <CategoryCard
                {...{
                    title: "Semua",
                    icon: "dumpster",
                    ...props,
                }}
            />
            {categories.map((category) => (
                <CategoryCard
                    {...{
                        key: category.id,
                        title: category.nama,
                        icon: category.icon,
                        ...props,
                    }}
                />
            ))}
        </div>
    );
};

export default CategoryCards;
