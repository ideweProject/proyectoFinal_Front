import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import image1 from "../../public/images/Products/Juices/yellow-juice-500.jpg";

function Cart({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow} className=" px-2">
        {name}
        <i className="bi bi-bag cartBtn"> Haz tu pedido</i>
      </Button>
      <Offcanvas show={show} placement="end" onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton className="bg-dark">
          <Offcanvas.Title className="cartTitle text-white text-center">
            Tu pedido
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-group list-group-flush">
            <li className="buyList list-group-item">
              <div className="row">
                <div className="col-6">
                  <img className="w-75" src={image1} alt="" />
                </div>
                <div className="col-6">
                  <div>
                    {" "}
                    <h5>Celery Juice</h5>
                    <span>$U 280</span>
                    <input
                      className="product-quntity-input d-block w-50"
                      type="number"
                      placeholder="1"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className="buyList list-group-item">
              <div className="row">
                <div className="col-6">
                  <img className="w-75" src={image1} alt="" />
                </div>
                <div className="col-6">
                  <div>
                    {" "}
                    <h5>Celery Juice</h5>
                    <span>$U 280</span>
                    <input
                      className="product-quntity-input d-block w-50"
                      type="number"
                      placeholder="1"
                    />
                  </div>
                </div>
              </div>
            </li>
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
                  <p className="fw-bold">$U 560</p>
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
