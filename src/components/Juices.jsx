import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Cartel from "./Cartel";
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

function Juices() {
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
    <div className="bg-white productosPadre">
      <div>
        <Cartel />
      </div>
      <div className="anchura">
        <section className="productos">
          <div className="producto-lista">
            {productosData.map((producto) => (
              <div key={producto.id} className="producto">
                <img
                  className="h-50"
                  src={producto.imagen}
                  alt={producto.nombre}
                />
                <p>{producto.nombre}</p>
                <p className="text-success">$U{producto.precio}</p>
                <button className="rounded-pill px-3 bg-dark text-white">
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Juices;
