import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const MenuCard = ({
    menu,
    masukKeranjang,
    changeShow,
    idActive,
    moodSelected,
    sizeSelected,
    setMoodSelected,
    setSizeSelected,
    temperatureSelected,
    setTemperatureSelected,
    sugarSelected,
    setSugarSelected,
}) => {
    const [moods, setMoods] = useState([
        {
            id: "panas" + menu.id,
            value: "Panas",
            icon: "🔥",
        },
        {
            id: "dingin" + menu.id,
            value: "Dingin",
            icon: "❄️",
        },
    ]);
    const [sizes, setSizes] = useState([
        {
            id: "kecil" + menu.id,
            value: "S",
        },
        {
            id: "sedang" + menu.id,
            value: "M",
        },
        {
            id: "besar" + menu.id,
            value: "L",
        },
    ]);
    const [percents, setPetcents] = useState([
        {
            id: 30 + menu.id,
            value: "30%",
        },
        {
            id: 50 + menu.id,
            value: "50%",
        },
        {
            id: 70 + menu.id,
            value: "70%",
        },
    ]);
    return (
        <div className="group cursor-pointer">
            <div className="flex flex-col bg-white max-w-lg rounded-3xl shadow-xl group-hover:scale-95 transition duration-300 ease-in-out">
                <div
                    className="flex gap-x-5 p-6 items-center"
                    onClick={() => changeShow(menu.id)}
                >
                    <img
                        src={`assets/images/${menu.category.nama.toLowerCase()}/${
                            menu.gambar
                        }`}
                        alt=""
                        className="w-48 h-36 rounded-3xl"
                    />
                    <div className="flex flex-col gap-y-2">
                        <h3 className="font-bold text-xl">{menu.nama}</h3>
                        <p className="text-gray-400">
                            Caramel syrup with coffe, milk, and whipped cream
                        </p>
                        <div className="flex gap-x-1">
                            <span className="text-xs font-bold pt-1">Rp</span>
                            <span className="text-xl font-extrabold">
                                {menu.harga
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </span>
                        </div>
                    </div>
                </div>
                {idActive == menu.id && menu.category.nama == "Minuman" && (
                    <div className="flex flex-wrap justify-between items-center px-8 py-4">
                        <div className="flex flex-col gap-y-3">
                            <h4 className="font-bold text-xl">Mood</h4>
                            <div className="flex items-center gap-x-4">
                                {moods.map((mood, index) => (
                                    <label
                                        key={index}
                                        htmlFor={mood.id}
                                        className={
                                            mood.value == moodSelected
                                                ? "bg-amber-800/10 outline outline-amber-900 w-10 h-10 grid place-content-center rounded-full text-xl cursor-pointer"
                                                : "bg-amber-800/5 border w-10 h-10 grid place-content-center rounded-full text-xl cursor-pointer"
                                        }
                                    >
                                        <input
                                            type="radio"
                                            id={mood.id}
                                            name="mood"
                                            value={mood.value}
                                            onChange={(e) =>
                                                setMoodSelected(e.target.value)
                                            }
                                            checked={
                                                mood.value == moodSelected
                                                    ? true
                                                    : false
                                            }
                                            hidden
                                        />
                                        {mood.icon}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <h4 className="font-bold text-xl">Size</h4>
                            <div className="flex items-center gap-x-4">
                                {sizes.map((size, index) => (
                                    <label
                                        key={index}
                                        htmlFor={size.id}
                                        className={
                                            size.value == sizeSelected
                                                ? "bg-amber-800/10 outline outline-amber-900 w-10 h-10 grid place-content-center rounded-full text-lg font-bold cursor-pointer"
                                                : "bg-amber-800/5 border w-10 h-10 grid place-content-center rounded-full text-lg font-bold cursor-pointer"
                                        }
                                    >
                                        <input
                                            type="radio"
                                            id={size.id}
                                            name="size"
                                            value={size.value}
                                            onChange={(e) =>
                                                setSizeSelected(e.target.value)
                                            }
                                            checked={
                                                size.value == sizeSelected
                                                    ? true
                                                    : false
                                            }
                                            hidden
                                        />
                                        {size.value}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                {idActive == menu.id && menu.category.nama == "Minuman" && (
                    <div className="flex flex-wrap justify-between items-center px-8 py-4">
                        <div className="flex flex-col gap-3">
                            <h4 className="font-bold text-xl">
                                {moodSelected == "Panas"
                                    ? "Hot"
                                    : moodSelected == "Dingin"
                                    ? "Ice"
                                    : "Mood %"}
                            </h4>
                            <div className="flex items-center gap-x-4">
                                {percents.map((percent, index) => (
                                    <label
                                        key={index}
                                        htmlFor={"temperature" + percent.id}
                                        className={`${
                                            moodSelected == "Panas"
                                                ? "text-red-500 "
                                                : moodSelected == "Dingin"
                                                ? "text-blue-500 "
                                                : "text-amber-900 "
                                        }${
                                            percent.value == temperatureSelected
                                                ? "outline outline-amber-900 bg-amber-800/10 "
                                                : "border bg-amber-800/5 "
                                        }w-10 h-10 grid place-content-center rounded-full text-xs font-bold cursor-pointer`}
                                    >
                                        <input
                                            type="radio"
                                            id={"temperature" + percent.id}
                                            name="temperature"
                                            value={percent.value}
                                            onChange={(e) =>
                                                setTemperatureSelected(
                                                    e.target.value
                                                )
                                            }
                                            checked={
                                                percent.value ==
                                                temperatureSelected
                                                    ? true
                                                    : false
                                            }
                                            hidden
                                        />
                                        {percent.value}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <h4 className="font-bold text-xl">Sugar</h4>
                            <div className="flex items-center gap-x-4">
                                {percents.map((percent, index) => (
                                    <label
                                        key={index}
                                        htmlFor={"sugar" + percent.id}
                                        className={`${
                                            percent.value == sugarSelected
                                                ? "outline outline-amber-900 bg-amber-800/10 "
                                                : "border bg-amber-800/5 "
                                        }w-10 h-10 grid place-content-center rounded-full text-xs text-amber-900 font-bold cursor-pointer`}
                                    >
                                        <input
                                            type="radio"
                                            id={"sugar" + percent.id}
                                            name="sugar"
                                            value={percent.value}
                                            onChange={(e) =>
                                                setSugarSelected(e.target.value)
                                            }
                                            checked={
                                                percent.value == sugarSelected
                                                    ? true
                                                    : false
                                            }
                                            hidden
                                        />
                                        {percent.value}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                {idActive == menu.id && (
                    <div className="p-6">
                        <button
                            className="w-full bg-amber-900 py-4 rounded-xl text-white font-bold flex items-center justify-center relative"
                            onClick={() =>
                                menu.category.nama !== "Minuman"
                                    ? masukKeranjang(menu)
                                    : moodSelected && sizeSelected
                                    ? masukKeranjang(menu)
                                    : swal({
                                          title: `Gagal Menambahkan ${menu.nama}`,
                                          text: `Silahkan pilih ${
                                              !moodSelected && !sizeSelected
                                                  ? "Mood dan Size "
                                                  : !moodSelected
                                                  ? "Mood "
                                                  : "Size "
                                          } terlebih dahulu`,
                                          icon: "warning",
                                          button: true,
                                      })
                            }
                        >
                            Masukkan Keranjang
                            <FontAwesomeIcon
                                icon="cart-arrow-down"
                                className="absolute right-8"
                            />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuCard;
