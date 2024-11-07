import React, { useState } from "react";

function Checkout() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
  };

  return (
    <div className="container mainCheck">
      <div className="checkout checkMain">
        <div className="row g-5">
          <div className="col-12 col-md-6 checkCol">
            <h4 className="mt-4">Contact information</h4>
            <form>
              <div className="mb-5">
                <label className="font-weight-medium">Email </label>
                <input
                  type="text"
                  name="address"
                  className="w-100 unInput input-large"
                  placeholder="email"
                />
              </div>
              <hr />

              <h4>Shipping Information</h4>
              <div className="row">
                <div className="col-12 col-sm-6 mb-3">
                  <label className="d-block font-weight-medium">Nombre</label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-100 unInput"
                    placeholder="nombre"
                  />
                </div>
                <div className="col-12 col-sm-6 mb-3">
                  <label className="d-block font-weight-medium">Apellido</label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-100 unInput"
                    placeholder="apellido"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="font-weight-medium">Direccion</label>
                <input
                  type="text"
                  name="address"
                  className="w-100 unInput"
                  placeholder="direccion"
                />
              </div>

              <div className="row">
                <div className="col-12 col-sm-6 mb-3">
                  <label className="d-block font-weight-medium">Ciudad</label>
                  <input
                    type="text"
                    name="city"
                    className="w-100 unInput"
                    placeholder="ciudad"
                  />
                </div>
                <div className="col-12 col-sm-6 mb-3">
                  <label className="d-block font-weight-medium">Pais</label>
                  <input
                    type="text"
                    name="country"
                    className="w-100 unInput"
                    placeholder="pais"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-6 mb-3">
                  <label className="d-block font-weight-medium">Departamento</label>
                  <input
                    type="text"
                    name="state"
                    className="w-100 unInput"
                    placeholder="departamento"
                  />
                </div>
                <div className="col-12 col-sm-6 mb-3">
                  <label className="d-block font-weight-medium">Codigo postal</label>
                  <input
                    type="text"
                    name="postalCode"
                    className="w-100 unInput"
                    placeholder="codigo postal..."
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="font-weight-medium">Telefono</label>
                <input
                  type="number"
                  name="phone"
                  className="w-100 unInput"
                  placeholder="numero de contacto..."
                />
              </div>
              <hr />

              <h4 className="mt-3 mb-3 fw-bold">Forma de pago</h4>

              <div className="payment-checkboxes d-flex flex-column flex-sm-row justify-content-between mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="creditCard"
                  />
                  <label className="form-check-label" htmlFor="creditCard">
                    Tarjeta de credito
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="payPal"
                  />
                  <label className="form-check-label" htmlFor="payPal">
                    PayPal
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="eTransfer"
                  />
                  <label className="form-check-label" htmlFor="eTransfer">
                    eTransfer
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <label className="font-weight-medium">Numero de tarjeta</label>
                <input
                  type="text"
                  name="cardNumber"
                  className="w-100 unInput"
                  placeholder="numero de tarjeta"
                />
              </div>
              <div className="mb-3">
                <label className="font-weight-medium">Nombre de tarjeta</label>
                <input
                  type="text"
                  name="nameOnCard"
                  className="w-100 unInput"
                  placeholder="nombre de tarjeta"
                />
              </div>
              <div className="row">
                <div className="col-12 col-md-9 mb-3">
                  <label className="d-block font-weight-medium">
                    Fecha de vencimiento (MM/YY)
                  </label>
                  <input
                    type="number"
                    name="expirationDate"
                    className="w-100 unInput"
                    placeholder="(MM/YY)"
                  />
                </div>
                <div className="col-12 col-md-3 mb-3">
                  <label className="d-block">CVC</label>
                  <input
                    type="number"
                    name="cvc"
                    className="w-100 unInput"
                    placeholder="CVC..."
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="col-12 col-md-6 checkCol">
            <h4 className="mt-4">Pedido total</h4>
            <div className="container">
              <div className="row">
                <div className="col-4 col-md-3">
                  <img
                    src="./images/img_pages/bars.jpg"
                    alt="Producto"
                    className="imagenSummary img-fluid"
                  />
                </div>
                <div className="col-8 col-md-9">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    {isVisible && <p className="mb-0">Producto</p>}
                    <i
                      className="bi bi-trash ms-2"
                      style={{ cursor: "pointer" }}
                      onClick={handleDelete}
                    ></i>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="mb-0 fw-bold">Precio USD</p>
                    <p>Qty:num</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div>
              <ul className="container">
                <li className="d-flex justify-content-between mb-2">
                  <p className="mb-0">Subtotal</p>
                  <p className="mb-0">Precio USD</p>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <p className="mb-0">Envio</p>
                  <p className="mb-0">Precio USD</p>
                </li>
                <li className="d-flex justify-content-between mb-2">
                  <p className="mb-0">Impuestos</p>
                  <p className="mb-0">Precio USD</p>
                </li>
              </ul>
            </div>

          <hr />
          <div className="container d-flex justify-content-between align-items-center ">
            <p className="mb-0 fw-bold">Total</p>
            <p className="mb-0 fw-bold">Precio total:</p>
          </div>
          <hr />
          <button className="w-100 btn confirmOrder">Confirmar pedido</button>
          <hr />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Checkout;
