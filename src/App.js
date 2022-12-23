import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "antd/es/layout/layout";
import Home from "./pages/Home";
import Exchanges from "./pages/Exchanges";
import Crypto from "./pages/CryptoCurrencies";
import CryptoDetails from "./pages/CryptoDetails";
import "./styles/index.css";
import Footer from "./components/Footer";
import CryptoApi from "./services/cryptoApi";

function App() {
  return (
    <div className="app">
      <CryptoApi />
      <Navbar />
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencies" element={<Crypto />} />
              <Route exact path="/crypto/:id" element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <Footer />
    </div>
  );
}

export default App;
