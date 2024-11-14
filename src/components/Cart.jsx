import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

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

  const [cartAdd, setCartAdd] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow} className=" border px-2">
        <div className="buyBtn w-100">
          <i className="bi bi-bag-fill cartBtn px-2"></i>
        </div>
      </Button>
      <Offcanvas show={show} placement="end" onHide={handleClose} {...props}>
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
                  <div className="col-6">
                    <img
                      className="w-75"
                      src={`./images/Products/Juices/${cartItem.image}.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <div>
                      {" "}
                      <h5>{cartItem.name}</h5>
                      <span className="d-block">$U{cartItem.price}</span>
                      <input
                        className="product-quntity-input me-5 w-50"
                        type="number"
                        value={cartItem.quantity}
                      />
                      <button onClick={() => handleRemoveItem(cartItem.id)}>
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
                <button className="rounded-pill w-100 btn btn-success">
                  Finalizar compra
                </button>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
