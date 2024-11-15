import React, { useEffect } from "react";
import { useState } from "react";
import CarouselProducts from "../components/CarrouselProducts";
import queryString from "query-string";
import axios from "axios";

const ProductPage = () => {
  const [cantidad, setCantidad] = useState(1);
  const [product, setProduct] = useState({});
  const queryParams = queryString.parse(window.location.search);
  const slug = queryParams.slug;

  useEffect(() => {
    async function getProduct() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products/show/?slug=${slug}`,
      });
      setProduct(response.data);
    }
    getProduct();
  }, []);

  const aumentarCantidad = () => {
    setCantidad((prevCantidad) => prevCantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad((prevCantidad) => prevCantidad - 1);
    }
  };

  console.log(product.ingredients);
  return (
    <div>
      <div className="product-page">
        <div className="product-details">
          <div className="product-image">
            <img
              src={`../../images/Products/Juices/${product.image}.jpg`}
              alt="Pure Green Juice"
            />
            <h5 className="mt-5 title">Ingredientes</h5>
            <ul className="list-group">
              {product.ingredients &&
                product.ingredients.map((ingredient, index) => (
                  <li className="text list-group-item " key={index}>
                    {ingredient}
                  </li>
                ))}
            </ul>
          </div>

          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="mb-0 text">$U{product.price}</p>
            <p className="price-subtittle text">$U260.00/500ml</p>
            <div>
              <p className="mb-1">Cantidad</p>

              <div className="d-flex ">
                <button className="amountbtn " onClick={disminuirCantidad}>
                  -{" "}
                </button>
                <input
                  type="number"
                  value={cantidad}
                  className="cantidad  mb-4"
                />
                <button onClick={aumentarCantidad} className="amountbtn">
                  +
                </button>
              </div>
            </div>

            <button className="add-to-cart btn-pill w-500 text">
              Añadir al carrito
            </button>
            <div className="mt-5">
              <h2 className="title">Descripción</h2>
              <p className="text">{product.description}</p>
            </div>
            <hr />
            <div>
              <h3>Conservación</h3>
              <p className="text">
                Conservar entre 2°C - 7°C y consumir dentro de 7 dias de la
                fecha de elaboración. Luego de abierto, consumir dentro de 24
                horas preferentemente.{" "}
              </p>
            </div>
            <div>
              <i class="bi bi-whatsapp mx-1 iconWpp"></i>
              <i class="bi bi-facebook mx-1 iconFacebook"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <CarouselProducts />
      </div>
    </div>
  );
};

export default ProductPage;
