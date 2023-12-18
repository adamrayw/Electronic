import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import DetailProductPage from "./pages/DetailProductPage";
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailProductPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
