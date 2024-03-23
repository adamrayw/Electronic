import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import DetailProductPage from "./pages/DetailProductPage";
import Header from './components/Header';
import Footer from './components/Footer';
import { ProtectRegisterRoute, ProtectRoutes } from "./utils/ProtectRegisterRoute";
import RegisterPages from "./pages/RegisterPages";
import LoginPages from "./pages/LoginPages";
import ResetPasswordPages from "./pages/ResetPasswordPages";
import UpdatePasswordPage from "./pages/UpdatePasswordPage";
import { ToastContainer } from "react-toastify";
import CheckoutPage from "./pages/checkout-pages/CheckoutPage";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* must login first to access */}
        <Route element={<ProtectRoutes />}>
          <Route path="/detail" element={<DetailProductPage />} />
        </Route>

        {/* if already login then cant access register and login again, must logout first */}
        <Route element={<ProtectRegisterRoute />}>
          <Route path="/register" element={<RegisterPages />} />
          <Route path="/login" element={<LoginPages />} />
          <Route path="/forget-password" element={<ResetPasswordPages />} />
          <Route path="/update-password/:token" element={<UpdatePasswordPage />} />
          <Route path="/checkout-barang" element={<CheckoutPage />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
