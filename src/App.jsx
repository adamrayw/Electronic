import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import DetailProductPage from "./pages/DetailProductPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
