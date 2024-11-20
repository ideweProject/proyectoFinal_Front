import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { removeFromCart, plusOneItem, minusOneItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { toggleOffcanvas } from "../redux/pagesSlice";
import { Link } from "react-router-dom";

function Cart({ name, ...props }) {
  const cartList = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (removedItem) => {
    dispatch(
      removeFromCart({
        id: removedItem,
      })
    );
  };

  const handlePlus = (plusItem) => {
    dispatch(
      plusOneItem({
        id: plusItem.id,
        price: plusItem.price,
      })
    );
  };
  const handleMinus = (minusItem) => {
    dispatch(
      minusOneItem({
        id: minusItem,
      })
    );
  };

  const showCart = useSelector((state) => state.pages.showCart);
  const handleToggle = () => dispatch(toggleOffcanvas());

  return (
    <>
      <Button variant="" onClick={handleToggle} className=" border px-2">
        <div className="buyBtn w-100">
          <i className="bi bi-bag-fill cartBtn px-2"></i>
        </div>
      </Button>
      <Offcanvas
        show={showCart}
        placement="end"
        onHide={handleToggle}
        {...props}
      >
        <Offcanvas.Header className=" bgCartTitle">
          <Offcanvas.Title className="cartTitle text-white text-center">
            Tu pedido
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-group list-group-flush">
            {cartList.items.map((cartItem) => (
              <li key={cartItem.id} className="buyList list-group-item">
                <div className="row">
                  <div className="col-4">
                    <img
                      className="w-75"
                      src={`/images/Products/Juices/${cartItem.image}.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <div>
                      {" "}
                      <h5>{cartItem.name}</h5>
                      <span className="d-block mb-3">$U{cartItem.price}</span>
                      <div className="d-flex">
                        <button
                          className="d-inline btnPlusMin"
                          onClick={() => handleMinus(cartItem.id)}
                        >
                          -
                        </button>
                        <input
                          className="product-quantity-input w-25 h-25"
                          type="number"
                          value={cartItem.quantity}
                        />

                        <button
                          className="btnPlusMin d-inline"
                          onClick={() => handlePlus(cartItem)}
                        >
                          <i class="bi bi-plus"></i>
                        </button>
                      </div>
                      <button
                        className="rounded border bg-white ms-auto d-block"
                        onClick={() => handleRemoveItem(cartItem.id)}
                      >
                        <i class="bi bi-trash3 text-danger"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <hr />

          <div className="btnBuy d-flex justify-content-center">
            <div className="mt-3">
              <div className="row ms-2">
                <div className="col-8">
                  <h5>Subtotal</h5>
                  <p>Envío incluído al finalizar compra.</p>
                </div>
                <div className="col-3">
                  <p className="fw-bold">$U {cartList.totalPrice}</p>
                </div>
              </div>
              <div className="container d-flex justify-content-center w-100">
                <Link
                  to={"/checkout"}
                  className="btn text-white btnBuyCart w-100 rounded-pill shadow"
                  onClick={handleToggle}
                >
                  Finalizar compra
                </Link>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
