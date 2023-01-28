import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
    return (
        <section className="w-full grid place-content-center">
            <div className="text-center text-2xl font-bold leading-10">
                <h1>Selamat Datang di Coffee Shop Kami</h1>
                <p>
                    Untuk memesan silahkan klik tombol Menu{" "}
                    <FontAwesomeIcon
                        icon="book-open"
                        className="text-black/50"
                    />
                </p>
                <p>Semoga anda suka dengan sajian dari kami</p>
                <p>Terima Kasih atas kunjungannya 😊🙏</p>
            </div>
        </section>
    );
};

export default Home;
