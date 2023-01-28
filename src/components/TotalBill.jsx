const TotalBill = ({ carts, newCarts }) => {
    return (
        <div className="flex flex-col gap-y-3 mt-16">
            <div className="flex justify-between items-center">
                <p className="font-bold">Subtotal</p>
                <div className="flex gap-x-1">
                    <span className="text-xs font-medium pt-1">Rp</span>
                    <span className="text-lg font-semibold">
                        {newCarts
                            .reduce((accumulator, currentValue) => {
                                return accumulator + currentValue.total_harga;
                            }, 0)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-gray-400 font-bold">Tax (10%)</p>
                <div className="flex gap-x-1 text-gray-400">
                    <span className="text-xs font-normal pt-1">Rp</span>
                    <span className="text-lg font-medium">
                        {newCarts
                            .reduce((accumulator, currentValue) => {
                                return (
                                    accumulator + currentValue.total_harga / 10
                                );
                            }, 0)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                </div>
            </div>
            <div className=" border border-dashed "></div>
            <div className="flex justify-between items-center">
                <p className="font-bold text-lg">Total</p>
                <div className="flex gap-x-1 ">
                    <span className="text-xs font-bold pt-1">Rp</span>
                    <span className="text-xl font-extrabold">
                        {newCarts
                            .reduce((accumulator, currentValue) => {
                                return (
                                    accumulator +
                                    currentValue.total_harga / 10 +
                                    currentValue.total_harga
                                );
                            }, 0)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TotalBill;
