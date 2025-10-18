import Header from "../Components/Header";
import Product from "../Components/Product";
import React from "react";
import JsonComparator from "../Components/JsonComparator";
const Homepage = () => {
  return (
    <>
      <Header />
      <JsonComparator/>
      <Product />
    </>
  );
};

export default Homepage;
