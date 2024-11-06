import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import image1 from "../assets/celery.jpg";

function Cart({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="px-2">
        {name}
        <i className="bi bi-bag"></i>
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
                <div className="col-6">{image1}</div>
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
                <div className="col-6">{image1}</div>
                <div className="col-6">
                  <div>
                    {" "}
                    <h5>Brown Juice</h5>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
