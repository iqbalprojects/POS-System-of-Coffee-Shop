import { useEffect } from "react";
import { useState } from "react";
import CardBill from "./CardBill";
import TotalBill from "./TotalBill";

const Bills = (props) => {
    const { carts, hapusKeranjang } = props;

    const [newCarts, setNewCarts] = useState([]);
    const [isCheckAll, setIsCheckAll] = useState(false);

    useEffect(() => {
        newCarts.length != 0 && newCarts.length == carts.length
            ? setIsCheckAll(true)
            : setIsCheckAll(false);
    }, [newCarts]);

    const handleSelectAll = (e) => {
        if (!isCheckAll) {
            setNewCarts([...carts]);
        } else {
            setNewCarts([]);
        }
    };

    const handleClick = (cart, e) => {
        const { id, checked } = e.target;
        if (checked) {
            setNewCarts([...newCarts, cart]);
        } else {
            setNewCarts(newCarts.filter((item) => item.id !== cart.id));
        }
    };

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-medium mb-4">Bills</h2>

            <div className="flex justify-between items-center mb-4">
                {carts.length !== 0 && (
                    <label
                        htmlFor="selectAll"
                        className="flex gap-x-3 items-center"
                    >
                        <input
                            type="checkbox"
                            name="selectAll"
                            id="selectAll"
                            className="h-4 aspect-1"
                            onChange={handleSelectAll}
                            checked={isCheckAll}
                        />
                        Pilih Semua
                    </label>
                )}
                {isCheckAll && (
                    <button
                        onClick={() =>
                            carts.length > 0 &&
                            swal({
                                title: "Yakin menghapus semua pesanan?",
                                text: "Jika setuju, semua pesanan akan terhapus!",
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                            }).then((willDelete) => {
                                if (willDelete) {
                                    hapusKeranjang(carts);

                                    setIsCheckAll(false);
                                    setNewCarts([]);
                                }
                            })
                        }
                    >
                        <u>Clear All</u>
                    </button>
                )}
            </div>
            <div className="flex flex-col gap-y-10">
                {carts.map((cart) => (
                    <div key={cart.id} className="flex gap-x-3 items-center">
                        <input
                            type="checkbox"
                            name={cart.product.nama}
                            id={cart.id}
                            className="h-4 aspect-1"
                            onChange={(e) => handleClick(cart, e)}
                            checked={newCarts
                                .map((item) => item.id)
                                .includes(cart.id)}
                        />
                        <CardBill
                            {...{
                                key: cart.id,
                                cart,
                                newCarts,
                                setNewCarts,
                                ...props,
                            }}
                        />
                    </div>
                ))}
            </div>
            <TotalBill {...{ newCarts }} />
        </div>
    );
};

export default Bills;
