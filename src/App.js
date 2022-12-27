import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "antd/es/layout/layout";
import Home from "./pages/Home";
import Exchanges from "./pages/Exchanges";
import Crypto from "./pages/CryptoCurrencies";
import CryptoDetails from "./pages/CryptoDetails";
import CryptoApi from "./services/cryptoApi";
import News from "./pages/News";
import { Circles } from "react-loader-spinner";
import { useState } from "react";
import "./styles/index.css";
import useScrollToTop from "./hooks/useScrollToTop";

function App() {
  const [loading, setLoading] = useState(false);
  useScrollToTop()
  return (
    <div className="app">
      <CryptoApi />
      <Navbar />
      <div className="main">
        <Layout>
          <div className="routes">
            {loading ? (
              <div className="loader__wrapper">
                <Circles
                  className="circles"
                  height="80"
                  width="80"
                  ariaLabel="loading"
                  color="#0071bd"
                />
              </div>
            ) : (
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/exchanges" element={<Exchanges />} />
                <Route exact path="/news" element={<News />} />
                <Route exact path="/cryptocurrencies" element={<Crypto />} />
                <Route
                  exact
                  path="/crypto/:id"
                  element={<CryptoDetails setLoading={setLoading} />}
                />
              </Routes>
            )}
          </div>
        </Layout>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
