import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { removeFromCart } from "../redux/cartSlice";

function Checkout() {
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userData = useSelector((state) => state.login);
  const taxes = Math.floor((cart.totalPrice + 80) * 0.1);
  const total = Math.floor(cart.totalPrice + 80 + taxes);

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDelete = (removedItem) => {
    dispatch(
      removeFromCart({
        id: removedItem,
      })
    );
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

  // console.log(formData);
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/orders/store`,
      data: {
        orderInfo: {
          buyer: userData.userId,
          itemsList: cart.items,
          formData,
        },
      },
    });
    console.log(response.data);
  }

  return (
    <div className="full-screen-background pt-2 pb-2 ">
      <div className="container mainCheck">
        <div className="checkout checkMain">
          <div className="row g-5">
            <div className="col-12 col-md-6 checkCol">
              <h4 className="mt-4 mb-4">Información de contacto</h4>
              <form id="sendOrder" onSubmit={(event) => handleSubmit(event)}>
                <div className="mb-4">
                  <label htmlFor="email"></label>
                  <input
                    type="text"
                    name="email"
                    className="w-100 unInput input-large"
                    placeholder="ejemplo@gmail.com"
                    onChange={(e) => handleChange(e)}
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
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6 mb-3">
                    <label htmlFor="lastname">Apellido</label>
                    <input
                      type="text"
                      name="lastName"
                      className="w-100 unInput"
                      placeholder="Rodríguez"
                      onChange={(e) => handleChange(e)}
                      required
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
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-12  mb-3">
                    <label htmlFor="state">Departamento</label>
                    <Form.Select
                      size="sl"
                      name="state"
                      onChange={(e) => handleChange(e)}
                    >
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
                      onChange={(e) => handleChange(e)}
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
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <hr />

                <h4 className="mt-3 mb-3 fw-bold">Forma de pago</h4>
                <div className="d-flex justify-content-around">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      value="creditCard"
                      id="creditCard"
                      checked={formData.payment === "creditCard"}
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="cc" className="form-check-label">
                      Tarjeta de crédito
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input "
                      type="radio"
                      name="payment"
                      value="paypal"
                      id="paypal"
                      checked={formData.payment === "paypal"}
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="cc" className="form-check-label">
                      Paypal
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="payment"
                      value="eTransfer"
                      id="eTransfer"
                      checked={formData.payment === "eTransfer"}
                      onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor="cc" className="form-check-label ">
                      Transferencia bancaria
                    </label>
                  </div>
                </div>

                <div className="mt-3">
                  <label htmlFor="cardNumber">Número de tarjeta</label>
                  <input
                    type="tel"
                    name="cardNumber"
                    className="w-100 unInput"
                    maxLength={19}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="XXXX XXXX XXXX XXXX"
                    required
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="owner">Titular</label>
                  <input
                    type="text"
                    name="owner"
                    className="w-100 unInput"
                    placeholder="Jorge Rodríguez"
                    onChange={(e) => handleChange(e)}
                    required
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

                    <select
                      name="expireMM"
                      id="expireMM"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="">Month</option>
                      <option value="01">Enero</option>
                      <option value="02">Febrero</option>
                      <option value="03">Marzo</option>
                      <option value="04">Abril</option>
                      <option value="05">Mayo</option>
                      <option value="06">Junio</option>
                      <option value="07">Julio</option>
                      <option value="08">Agosto</option>
                      <option value="09">Setiembre</option>
                      <option value="10">Octubre</option>
                      <option value="11">Noviembre</option>
                      <option value="12">Diciembre</option>
                    </select>
                    <select
                      name="expireYY"
                      id="expireYY"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="">Año</option>
                      <option value="20">2024</option>
                      <option value="21">2025</option>
                      <option value="22">2026</option>
                      <option value="23">2027</option>
                      <option value="24">2028</option>
                    </select>
                    <input
                      class="inputCard"
                      type="hidden"
                      name="expiry"
                      id="expiry"
                      maxLength="4"
                    />
                  </div>
                  <div className="col-12 col-md-3 mb-3">
                    <label className="d-block" htmlFor="cvc">
                      CVC
                    </label>
                    <input
                      type="tel"
                      maxLength={3}
                      name="cvc"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="w-100 unInput"
                      placeholder="CVC"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="col-12 col-md-6 checkCol">
              <h4 className="mt-4">Pedido </h4>
              <div className="container">
                {cart.items.map((item) => (
                  <div className="row" key={item.id}>
                    <div className="col-5 col-md-3">
                      <img
                        src={`./images/Products/Juices/${item.image}.jpg`}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-4 col-md-9">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        {isVisible && <p className="mb-0">{item.name}</p>}
                        <span onClick={() => handleDelete(item.id)}>
                          <i className="bi bi-trash3-fill fs-5 "></i>
                        </span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <p className="mb-0 fw-bold">$ {item.price} </p>
                        <span>{item.quantity}</span>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
              <div>
                <ul className="container">
                  <li className="d-flex justify-content-between mb-2">
                    <p className="mb-0">Subtotal</p>
                    <span>$ {cart.totalPrice}</span>
                  </li>
                  <li className="d-flex justify-content-between mb-2">
                    <p className="mb-0">Envio</p>
                    <span>$ {80}</span>
                  </li>
                  <li className="d-flex justify-content-between mb-2">
                    <p className="mb-0">Impuestos</p>
                    <span>$ {Math.floor((cart.totalPrice + 80) * 0.1)}</span>
                  </li>
                </ul>
              </div>

              <hr />
              <div className="container d-flex justify-content-between align-items-center ">
                <p className="mb-0 fw-bold">Total</p>
                <span>$ {total}</span>
              </div>
              <hr />
              <button
                className="w-100 btn confirmOrder"
                type="submit"
                form="sendOrder"
              >
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
