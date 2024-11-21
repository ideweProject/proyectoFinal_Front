import React from "react";
import { compareAsc, format } from "date-fns";

function CardOrder(orderData) {
  return (
    <>
      <div
        key={orderData.key}
        className="container d-flex justify-content-center mt-1"
      >
        <div className="order-main-container border p-4 rounded ">
          <div className="d-flex w-100 border-bottom ">
            <div className="text-center">
              <p className="text">Id</p>
              <span className="text">{orderData.orderData.id}</span>
            </div>
            <div className="ms-3">
              <p className="text ">Fecha de compra</p>
              <span className="text">
                {format(new Date(orderData.orderData.createdAt), "dd-MM-yy")}
              </span>
            </div>
            <div className="ms-3">
              <p className="text ">Dirección de envío</p>
              <span className="text">{orderData.orderData.address}</span>
            </div>
            <div className="ms-3">
              <p className="text ">Número de contacto</p>
              <span className="text">{orderData.orderData.phone}</span>
            </div>
            <div className="ms-3"></div>
          </div>
          {orderData.orderData.itemsList &&
            orderData.orderData.itemsList.map((item) => (
              <div className="row mt-3" key={item.id}>
                <div className="col-lg-2">
                  <img
                    src={`./images/Products/Juices/${item.image}.jpg`}
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="col-lg-10">
                  <div>
                    <p>{item.name}</p>
                    <p>$ {item.price}</p>
                  </div>
                  <div>
                    <div className="d-flex">
                      <p>Estado:</p>
                      <span>{orderData.orderData.state}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default CardOrder;
