import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const CardBill = ({
    cart,
    hapusKeranjang,
    tambahJumlah,
    kurangJumlah,
    tambahCatatan,
    setNewCarts,
    newCarts,
}) => {
    const [value, setValue] = useState("");
    const [idActive, setIdActive] = useState();
    let show = idActive;
    function changeShow(value) {
        show != value ? setIdActive(value) : setIdActive();
    }

    function tambah(item) {
        const carts = [...newCarts];
        const index = carts.findIndex((value) => value.id == item.id);
        carts[index] = {
            id: item.id,
            jumlah: item.jumlah + 1,
            total_harga: item.total_harga + item.product.harga,
            product: item.product,
        };
        setNewCarts([...carts]);
    }

    function kurang(item) {
        const carts = [...newCarts];
        const index = carts.findIndex((value) => value.id == item.id);
        carts[index] = {
            id: item.id,
            jumlah: item.jumlah - 1,
            total_harga: item.total_harga - item.product.harga,
            product: item.product,
        };
        setNewCarts([...carts]);
    }
    function hapus(item) {
        setNewCarts(newCarts.filter((value) => value.id !== item.id));
    }

    return (
        <div className="flex gap-x-3 w-full">
            <img
                src={`assets/images/${cart.product.category.nama.toLowerCase()}/${
                    cart.product.gambar
                }`}
                alt=""
                className="w-24 h-20 rounded-xl"
            />
            <div className="flex flex-col justify-between w-full relative">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">{cart.product.nama}</h3>
                    <FontAwesomeIcon
                        icon="trash"
                        className="cursor-pointer"
                        onClick={() =>
                            swal({
                                title: `Yakin menghapus ${cart.product.nama}?`,
                                text: `Jika OK, ${cart.product.nama} akan terhapus!`,
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                            }).then((willDelete) => {
                                if (willDelete) {
                                    hapusKeranjang(cart);
                                }
                            })
                        }
                    />
                </div>
                {cart.product.category.nama == "Minuman" && (
                    <div className="flex gap-x-1.5 font-semibold text-xs text-black/50">
                        <span className="border border-gray-300 px-1 rounded-md">
                            {cart.suhu + " " + cart.kadar_suhu}
                        </span>
                        <span className="border border-gray-300 px-1 rounded-md">
                            Ukuran: {cart.ukuran}
                        </span>
                        {cart.kadar_gula && (
                            <span className="border border-gray-300 px-1 rounded-md">
                                Gula: {cart.kadar_gula}
                            </span>
                        )}
                    </div>
                )}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-1.5">
                        <button
                            className="bg-red-500 border border-gray-300 h-6 w-6 grid place-content-center rounded-md text-white font-semibold"
                            onClick={() =>
                                cart.jumlah > 1
                                    ? (kurangJumlah(cart), kurang(cart))
                                    : swal({
                                          title: `Yakin menghapus ${cart.product.nama}?`,
                                          text: `Jika OK, ${cart.product.nama} akan terhapus!`,
                                          icon: "warning",
                                          buttons: true,
                                          dangerMode: true,
                                      }).then((willDelete) => {
                                          if (willDelete) {
                                              hapusKeranjang(cart), hapus(cart);
                                          }
                                      })
                            }
                        >
                            -
                        </button>
                        <p className="font-bold text-lg">{cart.jumlah}</p>
                        <button
                            className="bg-blue-500 border border-gray-300 h-6 w-6 grid place-content-center rounded-md text-white font-semibold"
                            onClick={() => (tambahJumlah(cart), tambah(cart))}
                        >
                            +
                        </button>
                    </div>
                    <button
                        className=" px-1.5 py-0.5 rounded-lg bg-amber-800/10 font-bold text-sm text-amber-900"
                        onClick={() => changeShow(cart.id)}
                    >
                        Notes <span className="ml-1">✍️</span>
                    </button>
                    <div className="flex gap-x-0.5 text-gray-400">
                        <span className="text-xs font-medium pt-0.5">Rp</span>
                        <span className="font-semibold">
                            {cart.total_harga
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                    </div>
                </div>
                {idActive == cart.id && (
                    <input
                        type="text"
                        placeholder="Masukkan catatan..."
                        className="w-full px-2 outline outline-slate-300 rounded-md text-black/50 absolute top-full mt-0.5"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={() => tambahCatatan(cart, value)}
                        autoFocus={cart.catatan ? false : true}
                    />
                )}
            </div>
        </div>
    );
};

export default CardBill;
