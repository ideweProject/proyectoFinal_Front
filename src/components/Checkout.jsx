import React, { useState } from "react";

function Checkout() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
  };
  
  return (
    <div className="container mainCheck   ">
    <div className="container checkout  checkMain ">
      <div className="row g-5">
        <div className="col-6  checkCol  ">
          <h4 className="mt-4">Contact information</h4>
          <form>
            <div className="mb-5">
            <label className="font-weight-medium">Email address</label>

              <input
                type="text"
                name="address"
                className="w-100 unInput input-large    "
                placeholder="Email..."
              />
            </div>
            <hr />

            <h4>Shipping Information</h4>
            <div className="row">
              <div className="col-6">
                <label className="d-block  font-weight-medium">First name</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-100 unInput  mb-3"
                  placeholder="First name..."
                />
              </div>
              <div className="col-6">
                <label className="d-block font-weight-medium">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-100 unInput"
                  placeholder="Last name.."
                />
              </div>
            </div>

            <div>
              <label className="font-weight-medium">Address</label>
              <input
                type="text"
                name="address"
                className="w-100 unInput mb-3"
                placeholder="Address..."
              />
            </div>
            <div className="row">
              <div className="col-6">
                <label className="d-block font-weight-medium">City</label>
                <input
                  type="text"
                  name="city"
                  className="w-100 unInput  mb-3"
                  placeholder="City..."
                />
              </div>
              <div className="col-6">
                <label className="d-block font-weight-medium">Country</label>
                <input
                  type="text"
                  name="country"
                  className="w-100 unInput"
                  placeholder="Country..."
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label className="d-block font-weight-medium">State/Province</label>
                <input
                  type="text"
                  name="state"
                  className="w-100 unInput  mb-3"
                  placeholder="State/Province..."
                />
              </div>
              <div className="col-6">
                <label className="d-block font-weight-medium">Postal code</label>
                <input
                  type="text"
                  name="postalCode"
                  className="w-100 unInput"
                  placeholder="Postal code..."
                />
              </div>
            </div>

            <div>
              <label className="font-weight-medium">Phone</label>
              <input
                type="number"
                name="phone"
                className="w-100 unInput mb-5"
                placeholder="Phone..."
              />
            </div>
            <hr />

            <h4 className="mt-3  mb-3 fw-bold">Payment</h4>

            <div className="payment-checkboxes d-flex justify-content-between mb-4">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe1"
                />
                <label className="form-check-label" htmlFor="rememberMe1">
                  Credit card
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe2"
                />
                <label className="form-check-label " htmlFor="rememberMe2">
                  PayPal
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe3"
                />
                <label className="form-check-label" htmlFor="rememberMe3">
                  eTransfer
                </label>
              </div>
            </div>

            <div>
              <label className="font-weight-medium">Card number</label>
              <input
                type="text"
                name="cardNumber"
                className="w-100  unInput  mb-3"
                placeholder="Card number..."
              />
            </div>
            <div>
              <label className="font-weight-medium">Name on card</label>
              <input
                type="text"
                name="nameOnCard"
                className="w-100 unInput  mb-3"
                placeholder="Name on card..."
              />
            </div>
            <div className="row">
              <div className="col-9">
                <label className="d-block font-weight-medium">Expiration date(MM/YY)</label>
                <input
                  type="number"
                  name="expirationDate"
                  className="w-100 unInput mb-3"
                  placeholder="(MM/YY)"
                />
              </div>
              <div className="col-3">
                <label className="d-block">CVC</label>
                <input
                  type="number"
                  name="cvc"
                  className="w-100 unInput mb-4"
                  placeholder="CVC..."
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-6  checkCol">
          <h4  className="mt-4">Order summary</h4>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <img
                  src="./images/img_pages/bars.jpg"
                  alt="Producto"
                  className="imagenSummary"
                />
              </div>
              <div className="col-9">
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
                <p className="mb-0 ">Subtotal</p>
                <p className="mb-0">Precio USD</p>
              </li>
              <li className="d-flex justify-content-between  mb-2">
                <p className="mb-0">Shipping</p>
                <p className="mb-0 ">Precio USD</p>
              </li>
              <li className="d-flex justify-content-between mb-2">
                <p className="mb-0">Taxes</p>
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
          <button className="w-100 btn confirmOrder">Confirm order</button>
          <hr />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Checkout;
