import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function Bars() {
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products/jugos`,
      });
      console.log(response.data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <div className="bg-white productosPadre">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          {" "}
          <h1>RAW BAR</h1>
          <p>Snack Saludable</p>
          <p>
            Descubrí las barras energéticas hechas con ingredientes de origen
            vegetal.
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center g-2">
        <div className="w-50">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Bars;
