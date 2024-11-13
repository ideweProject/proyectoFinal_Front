import React from 'react';

function CardOrder() {
  return(
    <div className='orderMian'>
      <div className="container mt-5">
        <div className="row border border-dark rounded orderUp">
          <div className="col-12 col-md-2 mb-5">
            <h5 className='m-4'>Order id</h5>
            <h5 className='m-4'>324739827493</h5>
          </div>
          <div className="col-12 col-md-2">
            <h5 className='m-4'>Fecha</h5>
            <h5 className='m-4'>12/11/2024</h5>
          </div>
          <div className="col-12 col-md-4">
            <h5 className='m-4'>Total</h5>
            <h5 className='m-4'>USD 38.00</h5>
          </div>
          <div className="col-12 col-md-4 colOrderBtn">
            <button className='mt-4 cardOrderA d-flex align-items-center rounded'>Ver pedido</button>
          </div>
        </div>

        <div className="row mt-1 mb-4 border border-dark rounded">
          <div className="col-12 col-md-2">
            <img src="./images/img_pages/worker.webp" className="imgOrderTest rounded" alt=""/>
          </div>
          <div className="col-12 col-md-8">
            <h5>Nombre</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas non pariatur consequatur laboriosam harum distinctio iure obcaecati autem, repellat sapiente omnis maxime dignissimos ad sed illum est tenetur iusto ab!</p>
          </div>
          <div className="col-12 col-md-2">
            <h5 className='priceOrder'>Precio USD</h5>
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-12 col-md-2 statusOrder">
                Status <i className="bi bi-arrow-counterclockwise"></i> Processing
              </div>
              <div className="col-12 col-md-10">
                <div className='d-flex justify-content-end align-items-center'>
                  <a className='orderA' href="/product">Ver compra</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOrder;
