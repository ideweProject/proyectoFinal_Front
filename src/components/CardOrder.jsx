import React from "react";

function CardOrder(orderData) {
  return (
    <>
      <div className="container d-flex justify-content-center mt-1">
        <div className="order-main-container border p-4 rounded ">
          <div className="d-flex w-100 border-bottom ">
            <div className="text-center">
              <p className="text">Id de orden</p>
              <span className="text">{orderData.orderData.id}</span>
            </div>
            <div className="ms-3">
              <p className="text ">Fecha de compra</p>
              <span className="text">{orderData.orderData.createdAt}</span>
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

    // <div className="orderMian">
    //   <div className="container mt-5">
    //     <div className="row border border-dark rounded orderUp">
    //       <div className="col-12 col-md-2 mb-5">
    //         <h5 className="m-4">Order id</h5>
    //         <h5 className="m-4">324739827493</h5>
    //       </div>
    //       <div className="col-12 col-md-2">
    //         <h5 className="m-4">Fecha</h5>
    //         <h5 className="m-4">12/11/2024</h5>
    //       </div>
    //       <div className="col-12 col-md-4">
    //         <h5 className="m-4">Total</h5>
    //         <h5 className="m-4">USD 38.00</h5>
    //       </div>
    //       <div className="col-12 col-md-4 colOrderBtn">
    //         <button className="mt-4 cardOrderA d-flex align-items-center rounded">
    //           Ver pedido
    //         </button>
    //       </div>
    //     </div>

    //     <div className="row mt-1 mb-4 border border-dark rounded">
    //       <div className="col-12 col-md-2">
    //         <img
    //           src="./images/img_pages/worker.webp"
    //           className="imgOrderTest rounded"
    //           alt=""
    //         />
    //       </div>
    //       <div className="col-12 col-md-8">
    //         <h5>Nombre</h5>
    //         <p>
    //           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
    //           non pariatur consequatur laboriosam harum distinctio iure
    //           obcaecati autem, repellat sapiente omnis maxime dignissimos ad sed
    //           illum est tenetur iusto ab!
    //         </p>
    //       </div>
    //       <div className="col-12 col-md-2">
    //         <h5 className="priceOrder">Precio USD</h5>
    //       </div>

    //       <div className="col-12">
    //         <div className="row">
    //           <div className="col-12 col-md-2 statusOrder">
    //             Status <i className="bi bi-arrow-counterclockwise"></i>{" "}
    //             Processing
    //           </div>
    //           <div className="col-12 col-md-10">
    //             <div className="d-flex justify-content-end align-items-center">
    //               <a className="orderA" href="/product">
    //                 Ver compra
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default CardOrder;
