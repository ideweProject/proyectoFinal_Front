 import React from 'react';

 function CardOrder() {
  return(
    
   <div className='orderMian'>
    <div className="container mt-5 ">
      <div className="row border border-dark rounded">
        <div className="col-2 mb-5"><h5 className='m-4'>Order id</h5>
        </div>
        <div className="col-2"><h5 className='m-4'>Fecha</h5>
        </div>
        <div className="col-4"><h5 className='m-4'>Total</h5>
        </div>
        <div className="col-2"><a className='m-4  cardOrderA  d-flex align-items-center rounded '>Ver Orden</a>
        </div>
        <div className="col-2"><a className='m-4 cardOrderA   d-flex align-items-center rounded '>Ver Factura</a>
        </div>
      </div>
   <div className="row mt-1 mb-4  border border-dark rounded">
     <div className="col-2">
         <img src="./images/img_pages/worker.webp"className="imgOrderTest rounded " alt=""/>  
     </div>
    <div className="col-8">
      <h5>Nombre</h5>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas non pariatur consequatur laboriosam harum distinctio iure obcaecati autem, repellat sapiente omnis maxime dignissimos ad sed illum est tenetur iusto ab!</p>
    </div>
    <div className="col-2">
      <h5>USD</h5>
    </div>
    <div className="container ">
      <div className="row">
        <div className="col-12">
          <div className='d-flex justify-content-end align-items-center'>
          <a className=' cardOrderA'>Ver producto</a> 
          <a className=' cardOrderA m-4'>Seguir comprando</a>  
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