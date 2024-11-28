import React, { useEffect, useState } from "react";
import CarouselProducts from "../components/CarrouselProducts";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartFromProduct } from "../redux/cartSlice";
import { toggleOffcanvas } from "../redux/pagesSlice";
import { toast } from "react-toastify";

const ProductPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/products/show/${slug}`
      );
      setProduct(response.data);
    }
    getProduct();
  }, [slug]);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleShowCart = () => {
    dispatch(toggleOffcanvas());
  };

  const handleAddItem = () => {
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

  const handleSocialClick = () => {
    toast.warn("Función fuera del alcance de este proyecto", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div>
      <div className="product-page container">
        <div className="row">
          <div className="col-md-6 col-12 product-image">
            <img
              src={`${import.meta.env.VITE_SUPABASE_URL}/${product.image}.jpg`}
              alt={product.name}
              className="img-fluid"
            />
            <h5 className="mt-5 title">Ingredientes</h5>
            <ul className="list-group list-unstyled">
              {product.ingredients &&
                product.ingredients.map((ingredient, index) => (
                  <li className="text" key={index}>
                    {ingredient}
                  </li>
                ))}
            </ul>
          </div>

          <div className="col-md-6 col-12 product-info">
            <h1 className="text-start">{product.name}</h1>
            <p className="mb-0 text product-price fs-3 fw-bold">
              $U {product.price}
            </p>
            <p className="price-subtittle text">${product.price} /500ml</p>
            <div>
              <p className="mb-1">Cantidad</p>
              <div className="d-flex">
                <button
                  className="btnPlusMin d-flex btn align-items-center justify-content-center"
                  onClick={decrement}
                >
                  <i class="bi bi-dash-circle fs-4 "></i>
                </button>
                <input
                  type="number"
                  className="product-quantity-input h-25 mb-4"
                  value={quantity}
                />
                <button
                  className="btnPlusMin d-flex btn align-items-center justify-content-center"
                  onClick={increment}
                >
                  <i class="bi bi-plus-circle fs-4"></i>
                </button>
              </div>
            </div>

            <button
              className="add-to-cart btn-pill w-100 text btnBuyCart"
              onClick={() => {
                handleShowCart();
                handleAddItem();
              }}
            >
              Añadir al carrito
            </button>

            <div className="mt-5">
              <h3 className="title fw-normal">Descripción</h3>
              <p className="text">{product.description}</p>
            </div>

            <hr />

            <div>
              <h3 className="title">Conservación</h3>
              <p className="text">
                Conservar entre 2°C - 7°C y consumir dentro de 7 días de la
                fecha de elaboración. Luego de abierto, consumir dentro de 24
                horas preferentemente.
              </p>
            </div>

            <div>
              <i
                onClick={handleSocialClick}
                className="bi bi-whatsapp mx-1 iconWpp"
              ></i>
              <i
                onClick={handleSocialClick}
                className="bi bi-facebook mx-1 iconFacebook"
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <CarouselProducts />
      </div>
    </div>
  );
};

export default ProductPage;
