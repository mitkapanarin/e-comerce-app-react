import { useState } from "react";
import Navbar from "./component/Navbar";
import "./App.css";
import { products } from "./data.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function App() {
  const [data, setData] = useState(products);
  const [basket, setBasket] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home basket={basket} setBasket={setBasket} data={data}/>}/>
        <Route path="/checkout" element={<Checkout basket={basket} setBasket={setBasket}/>}/>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
