import React from "react";
import { compareAsc, format } from "date-fns";

function CardOrder(orderData) {
  return (
    <>
      <div
        key={orderData.key}
        className="container d-flex justify-content-center mt-1"
      >
        <div className=" border p-4 rounded order-main-container shadow mt-2">
          <div className="d-flex border-bottom w-100 ">
            <div className="text-center  ">
              <p className="text fw-bold">Id</p>
              <span className="text">{orderData.orderData.id}</span>
            </div>
            <div className="ms-3">
              <p className="text fw-bold">Fecha de compra</p>
              <span className="text">
                {format(new Date(orderData.orderData.createdAt), "dd-MM-yy")}
              </span>
            </div>
            <div className="ms-3">
              <p className="text fw-bold">Dirección de envío</p>
              <span className="text">{orderData.orderData.address}</span>
            </div>
            <div className="ms-3">
              <p className="text fw-bold">Número de contacto</p>
              <span className="text">{orderData.orderData.phone}</span>
            </div>
            <div className="ms-3"></div>
          </div>
          {orderData.orderData.itemsList &&
            orderData.orderData.itemsList.map((item) => (
              <div className="row mt-3" key={item.id}>
                <div className="col-lg-2">
                  <img
                    src={`${import.meta.env.VITE_SUPABASE_URL}/${
                      item.image
                    }.png`}
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="col-lg-10">
                  <div>
                    <p>{item.name}</p>
                    <p>$U {item.price}</p>
                  </div>
                  <div>
                    <div className="d-flex">
                      <p>Estado:</p>
                      <span className="ms-1">{orderData.orderData.state}</span>
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
