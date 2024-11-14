import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function Checkout() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
  };
  const cities = [
    "Artigas",
    "Canelones",
    "Cerro Largo",
    "Colonia",
    "Durazno",
    "Flores",
    "Florida",
    "Lavalleja",
    "Maldonado",
    "Montevideo",
    "Paysandú",
    "Río Negro",
    "Rivera",
    "Rocha",
    "Salto",
    "San José",
    "Soriano",
    "Tacuarembó",
    "Treinta y Tres",
  ];

  return (
    <div className="full-screen-background pt-2 pb-2 ">
      <div className="container mainCheck">
        <div className="checkout checkMain">
          <div className="row g-5">
            <div className="col-12 col-md-6 checkCol">
              <h4 className="mt-4 mb-4">Información de contacto</h4>
              <form>
                <div className="mb-4">
                  <label htmlFor="email"></label>
                  <input
                    type="text"
                    name="email"
                    className="w-100 unInput input-large"
                    placeholder="ejemplo@gmail.com"
                  />
                </div>
                <hr />

                <h4>Información de envío</h4>
                <div className="row">
                  <div className="col-12 col-sm-6 mb-3">
                    <label htmlFor="firstname">Nombre</label>
                    <input
                      type="text"
                      name="firstName"
                      className="w-100 unInput"
                      placeholder="Jorge"
                    />
                  </div>
                  <div className="col-12 col-sm-6 mb-3">
                    <label htmlFor="lastname">Apellido</label>
                    <input
                      type="text"
                      name="lastName"
                      className="w-100 unInput"
                      placeholder="Rodríguez"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="font-weight-medium">Dirección</label>
                  <input
                    type="text"
                    name="address"
                    className="w-100 unInput"
                    placeholder="ej: Bulevar Artigas 1234 esq Av. Italia"
                  />
                </div>

                <div className="row">
                  <div className="col-12  mb-3">
                    <label htmlFor="city">Departamento</label>
                    <Form.Select size="sl" name="city">
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-sm-6 mb-3">
                    <label htmlFor="postalCode">Código postal</label>
                    <input
                      type="text"
                      name="postalCode"
                      className="w-100 unInput"
                      placeholder="80500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="number"
                    name="phone"
                    className="w-100 unInput"
                    placeholder=" 095 123 456"
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
                  <label htmlFor="cardNumber">Número de tarjeta</label>
                  <input
                    type="text"
                    name="cardNumber"
                    className="w-100 unInput"
                    placeholder="4123 4567 123 9819"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="owner">Titular</label>
                  <input
                    type="text"
                    name="owner"
                    className="w-100 unInput"
                    placeholder="Jorge Rodríguez"
                  />
                </div>
                <div className="row">
                  <div className="col-12 col-md-9 mb-3">
                    <label
                      className="d-block font-weight-medium"
                      htmlFor="expDate"
                    >
                      Fecha de expiración
                    </label>
                    <input
                      type="number"
                      name="expDate"
                      className="w-100 unInput"
                      placeholder="(MM/YY)"
                    />
                  </div>
                  <div className="col-12 col-md-3 mb-3">
                    <label className="d-block" htmlFor="cvc">
                      CVC
                    </label>
                    <input
                      type="number"
                      name="cvc"
                      className="w-100 unInput"
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="col-12 col-md-6 checkCol">
              <h4 className="mt-4">Pedido </h4>
              <div className="container">
                <div className="row">
                  <div className="col-4 col-md-3"></div>
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
                      <p className="mb-0 fw-bold">Precio </p>
                      <p>cantidad</p>
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
              </div>
              <hr />
              <button className="w-100 btn confirmOrder ">
                Confirmar pedido
              </button>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
