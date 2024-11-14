import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
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
        <Offcanvas.Header closeButton className="bg-dark">
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
                      src={`./images/Products/Juices/${cartItem.image}.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <div>
                      {" "}
                      <h5>{cartItem.name}</h5>
                      <span className="d-block mb-3">$U{cartItem.price}</span>
                      <input
                        className="product-quntity-input me-5"
                        type="number"
                        value={cartItem.quantity}
                      />
                      <i class="bi bi-plus-square me-3 d-inline"></i>
                      <i class="bi bi-dash-square d-inline"></i>
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

          <div className="btnBuy d-flex flex-column w-100">
            <div className="mt-auto">
              <div className="row">
                <div className="col-9">
                  <h4>Subtotal</h4>
                  <p>Envío incluído al finalizar compra.</p>
                </div>
                <div className="col-3">
                  <p className="fw-bold">$U {cartList.totalPrice}</p>
                </div>
              </div>
              <div className="container d-flex justify-content-center w-100">
                <Link
                  to={"/checkout"}
                  className="btn btn-success w-100 rounded-pill"
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
