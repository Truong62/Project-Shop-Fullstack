import { Fragment } from "react";
import HomePageMain from "./components/HomePage/HomePageMain";
import { NavLink, Routes, Route } from "react-router-dom";
import ProductPageMain from "./components/ProductPage/ProductPageMain";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageMain></HomePageMain>}></Route>
      <Route path="/products-new-in" element={<ProductPageMain></ProductPageMain>}></Route>
      <Route path="/products-football" element={<ProductPageMain></ProductPageMain>}></Route>
      <Route path="/products-basketball" element={<ProductPageMain></ProductPageMain>}></Route>
      <Route path="/products-badminton" element={<ProductPageMain></ProductPageMain>}></Route>
      <Route path="/products-rugby" element={<ProductPageMain></ProductPageMain>}></Route>
      <Route path="/products-tennis" element={<ProductPageMain></ProductPageMain>}></Route>
      <Route path="/products-hockey" element={<ProductPageMain></ProductPageMain>}></Route>
      <Route path="/products-lifestyle" element={<ProductPageMain></ProductPageMain>}></Route>
      <Route path="/products-american-football" element={<ProductPageMain></ProductPageMain>}></Route>
      <Route path="/products-sales" element={<ProductPageMain></ProductPageMain>}></Route>
      <Route path="*" element={<h1>page does not exist</h1>}></Route>
    </Routes>
  );
}

export default App;
