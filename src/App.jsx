import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import DetailProductPage from "./pages/DetailProductPage";
import Header from './components/Header'
import Footer from './components/Footer'
import RegisterPages from "./pages/RegisterPages";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailProductPage />} />
        <Route path="/register" element={<RegisterPages />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
