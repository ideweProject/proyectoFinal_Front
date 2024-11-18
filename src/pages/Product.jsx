import React, { useEffect } from "react";
import { useState } from "react";
import CarouselProducts from "../components/CarrouselProducts";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToCartFromProduct } from "../redux/cartSlice";
import { toggleOffcanvas } from "../redux/pagesSlice";

const ProductPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [quantity, setquantity] = useState(1);

  useEffect(() => {
    async function getProduct() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products/show/?slug=${slug}`,
      });
      setProduct(response.data);
    }
    getProduct();
  }, [slug]);

  const increment = () => {
    setquantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setquantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleShowCart = () => {
    dispatch(toggleOffcanvas());
  };

  const handleAddItem = (clickedItem) => {
    dispatch(
      addToCartFromProduct({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
      })
    );
  };

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
            <h1 className="text-start">{product.name}</h1>
            <p className="mb-0 text">$U{product.price}</p>
            <p className="price-subtittle text">$U260.00/500ml</p>
            <div>
              <p className="mb-1">Cantidad</p>

              <div className="d-flex ">
                <button className="btnPlusMin" onClick={decrement}>
                  -{" "}
                </button>
                <input
                  type="number"
                  className="product-quantity-input  h-25 mb-4 "
                  value={quantity}
                />
                <button className="btnPlusMin" onClick={increment}>
                  +
                </button>
              </div>
            </div>

            <button
              className="add-to-cart btn-pill w-500 text btnBuyCart"
              onClick={() => {
                handleShowCart();
                handleAddItem({ product });
              }}
            >
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
              <i className="bi bi-whatsapp mx-1 iconWpp"></i>
              <i className="bi bi-facebook mx-1 iconFacebook"></i>
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
