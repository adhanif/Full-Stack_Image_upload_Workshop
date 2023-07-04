import { useState } from "react";
import ProductForm from "./components/ProductForm";
import Products from "./components/Products";
import "./App.css";

function App() {
  return (
    <>
      <ProductForm />
      <Products />
    </>
  );
}

export default App;
