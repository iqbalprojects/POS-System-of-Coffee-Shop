import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import History from "./pages/History";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import Promos from "./pages/Promos";
import Setting from "./pages/Setting";
import Wallet from "./pages/Wallet";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="menu" element={<Menus />} />
                <Route path="history" element={<History />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="promos" element={<Promos />} />
                <Route path="setting" element={<Setting />} />
            </Route>
        </Routes>
    );
}

export default App;
