import { useState, useEffect } from "react";
import CategoryCards from "../components/CategoryCards";
import MenuCards from "../components/MenuCards";
import MenuHeader from "../components/MenuHeader";
import { API_URL } from "./../utils/constants";
import axios from "axios";
import swal from "sweetalert";
import PaymentCart from "../components/PaymentCart";

const Menus = () => {
    const [menus, setMenus] = useState([]);
    const [categories, setCategories] = useState([]);
    const [carts, setCarts] = useState([]);
    const [cartsChecked, setCartsChecked] = useState([]);
    const [categorySelected, setCategorySelected] = useState("Semua");
    const [moodSelected, setMoodSelected] = useState("");
    const [sizeSelected, setSizeSelected] = useState("");
    const [temperatureSelected, setTemperatureSelected] = useState("");
    const [sugarSelected, setSugarSelected] = useState("");

    useEffect(() => {
        axios.get(API_URL + "products").then((response) => {
            setMenus(response.data);
        });

        axios.get(API_URL + "categories").then((response) => {
            setCategories(response.data);
        });

        axios.get(API_URL + "keranjangs").then((response) => {
            setCarts(response.data);
        });
        axios.get(API_URL + "keranjangschecked").then((response) => {
            setCartsChecked(response.data);
        });
    }, [carts, cartsChecked]);

    function masukKeranjang(value) {
        axios
            .get(API_URL + "keranjangs?product.id=" + value.id)
            .then((response) => {
                if (value.category.nama == "Minuman") {
                    response.data = response.data.filter(
                        (res) =>
                            res.suhu == moodSelected &&
                            res.ukuran == sizeSelected &&
                            res.kadar_suhu == (temperatureSelected || "50%") &&
                            res.kadar_gula == (sugarSelected || "50%")
                    );
                }
                if (response.data[0]) {
                    let keranjang;
                    if (value.category.nama == "Minuman") {
                        keranjang = {
                            jumlah: response.data[0].jumlah + 1,
                            total_harga:
                                response.data[0].total_harga + value.harga,
                            suhu: response.data[0].suhu,
                            ukuran: response.data[0].ukuran,
                            kadar_suhu: response.data[0].kadar_suhu,
                            kadar_gula: response.data[0].kadar_gula,
                            catatan: response.data[0].catatan,
                            product: value,
                        };
                    } else {
                        keranjang = {
                            jumlah: response.data[0].jumlah + 1,
                            total_harga:
                                response.data[0].total_harga + value.harga,
                            product: value,
                        };
                    }
                    axios
                        .put(
                            API_URL + "keranjangs/" + response.data[0].id,
                            keranjang
                        )
                        .then((response) => {
                            swal({
                                title: "Berhasil!",
                                text: `Berhasil Menambahkan ${value.nama}`,
                                icon: "success",
                                button: false,
                                timer: 1000,
                            });
                        });
                } else {
                    let keranjang;
                    if (value.category.nama == "Minuman") {
                        keranjang = {
                            jumlah: 1,
                            total_harga: value.harga,
                            suhu: moodSelected,
                            ukuran: sizeSelected,
                            kadar_suhu: temperatureSelected || "50%",
                            kadar_gula: sugarSelected || "50%",
                            product: value,
                        };
                    } else {
                        keranjang = {
                            jumlah: 1,
                            total_harga: value.harga,
                            product: value,
                        };
                    }
                    axios
                        .post(API_URL + "keranjangs", keranjang)
                        .then((response) => {
                            swal({
                                title: "Berhasil!",
                                text: `Berhasil Menambahkan ${value.nama}`,
                                icon: "success",
                                button: false,
                                timer: 1000,
                            });
                        });
                }
            });
    }

    function tambahCatatan(value, text) {
        axios.get(API_URL + "keranjangs?id=" + value.id).then((response) => {
            let keranjang;
            if (value.product.category.nama == "Minuman") {
                keranjang = {
                    jumlah: response.data[0].jumlah,
                    total_harga: response.data[0].total_harga,
                    suhu: response.data[0].suhu,
                    ukuran: response.data[0].ukuran,
                    kadar_suhu: response.data[0].kadar_suhu,
                    kadar_gula: response.data[0].kadar_gula,
                    catatan: text,
                    product: value.product,
                };
            } else
                keranjang = {
                    jumlah: response.data[0].jumlah,
                    total_harga: response.data[0].total_harga,
                    catatan: text,
                    product: value.product,
                };

            axios.put(API_URL + "keranjangs/" + value.id, keranjang);
        });
    }

    function tambahJumlah(value) {
        axios.get(API_URL + "keranjangs?id=" + value.id).then((response) => {
            console.log(response.data[0].jumlah);
            console.log(value.product.category.nama);
            let keranjang;
            if (value.product.category.nama == "Minuman") {
                keranjang = {
                    jumlah: response.data[0].jumlah + 1,
                    total_harga:
                        response.data[0].total_harga + value.product.harga,
                    suhu: response.data[0].suhu,
                    ukuran: response.data[0].ukuran,
                    kadar_suhu: response.data[0].kadar_suhu,
                    kadar_gula: response.data[0].kadar_gula,
                    catatan: response.data[0].catatan,
                    product: value.product,
                };
            } else
                keranjang = {
                    jumlah: response.data[0].jumlah + 1,
                    total_harga:
                        response.data[0].total_harga + value.product.harga,
                    catatan: response.data[0].catatan,
                    product: value.product,
                };
            axios.put(API_URL + "keranjangs/" + value.id, keranjang);
        });
    }
    function kurangJumlah(value) {
        axios.get(API_URL + "keranjangs?id=" + value.id).then((response) => {
            let keranjang;
            if (value.product.category.nama == "Minuman") {
                keranjang = {
                    jumlah: response.data[0].jumlah - 1,
                    total_harga:
                        response.data[0].total_harga - value.product.harga,
                    suhu: response.data[0].suhu,
                    ukuran: response.data[0].ukuran,
                    kadar_suhu: response.data[0].kadar_suhu,
                    kadar_gula: response.data[0].kadar_gula,
                    catatan: response.data[0].catatan,
                    product: value.product,
                };
            } else
                keranjang = {
                    jumlah: response.data[0].jumlah - 1,
                    total_harga:
                        response.data[0].total_harga - value.product.harga,
                    catatan: response.data[0].catatan,
                    product: value.product,
                };
            axios.put(API_URL + "keranjangs/" + value.id, keranjang);
        });
    }

    function hapusKeranjang(value) {
        value.id
            ? axios.delete(API_URL + "keranjangs/" + value.id)
            : value.map((item) =>
                  axios.delete(API_URL + "keranjangs/" + item.id)
              );
    }

    return (
        <section className="w-full flex gap-x-14 justify-between">
            <div className="w-full my-10">
                <MenuHeader />
                <CategoryCards
                    {...{ categories, categorySelected, setCategorySelected }}
                />
                <MenuCards
                    {...{
                        menus,
                        categorySelected,
                        masukKeranjang,
                        moodSelected,
                        sizeSelected,
                        setMoodSelected,
                        setSizeSelected,
                        temperatureSelected,
                        setTemperatureSelected,
                        sugarSelected,
                        setSugarSelected,
                    }}
                />
            </div>
            <PaymentCart
                {...{
                    carts,
                    cartsChecked,
                    hapusKeranjang,
                    tambahJumlah,
                    kurangJumlah,
                    tambahCatatan,
                }}
            />
        </section>
    );
};

export default Menus;
