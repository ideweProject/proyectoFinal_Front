import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const productosData = [
  {
    id: 1,
    nombre: "Celery juice",
    precio: "280,00",
    imagen:
      "https://static.wixstatic.com/media/a9b61d_c49afa33446142178af6161206a9ee4c~mv2.jpg/v1/fill/w_226,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a9b61d_c49afa33446142178af6161206a9ee4c~mv2.jpg",
  },
];

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
