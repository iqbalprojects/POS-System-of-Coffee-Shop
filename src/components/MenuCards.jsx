import MenuCard from "./MenuCard";
import { useState } from "react";

const MenuCards = (props) => {
    const {
        menus,
        categorySelected,
        setMoodSelected,
        setSizeSelected,
        setTemperatureSelected,
        setSugarSelected,
    } = props;
    const [idActive, setIdActive] = useState();
    let show = idActive;
    function changeShow(value) {
        show != value ? setIdActive(value) : setIdActive();
        setMoodSelected("");
        setSizeSelected("");
        setTemperatureSelected("");
        setSugarSelected("");
    }
    return (
        <div>
            <div className="flex justify-between items-center mt-12 mb-8 font-medium">
                <h2 className="text-2xl">
                    {categorySelected === "Semua"
                        ? `Semua Menu`
                        : categorySelected && `Menu ${categorySelected}`}
                </h2>
                <p className="text-lg text-gray-400">
                    {categorySelected === "Semua"
                        ? `${menus.length} ${categorySelected} Menu`
                        : `${
                              menus.filter(
                                  (menu) =>
                                      menu.category.nama === categorySelected
                              ).length
                          } Menu ${categorySelected}`}
                </p>
            </div>
            <div className="flex justify-between flex-wrap gap-y-7">
                {menus.map((menu) =>
                    categorySelected === "Semua" ? (
                        <MenuCard
                            {...{
                                key: menu.id,
                                menu,
                                idActive,
                                changeShow,
                                ...props,
                            }}
                        />
                    ) : (
                        menu.category.nama === categorySelected && (
                            <MenuCard
                                {...{
                                    key: menu.id,
                                    menu,
                                    idActive,
                                    changeShow,
                                    ...props,
                                }}
                            />
                        )
                    )
                )}
            </div>
        </div>
    );
};

export default MenuCards;
