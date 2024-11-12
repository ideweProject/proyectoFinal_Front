import React from 'react';
import { useState } from 'react';
import CarouselProducts from "../components/CarrouselProducts"


const ProductPage = () => {
  const [cantidad, setCantidad] = useState(1);

  const aumentarCantidad = () => {
    setCantidad(prevCantidad => prevCantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(prevCantidad => prevCantidad - 1);
    }
  };


  return (
   <div>
     <div className="product-page">
      <div className="product-details">
        <div className="product-image">
          <img src="https://static.wixstatic.com/media/f0020d_b80b280113064d7d9b569e9ecaf726a0~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f0020d_b80b280113064d7d9b569e9ecaf726a0~mv2.jpg" alt="Pure Green Juice" />
        <h5 className='mt-5'>Ingredientes</h5>
        <div ><p>Espinaca puerro oregano</p></div>
        </div>

        <div className="product-info">
          <h1>Pure Green Juice</h1>
          <p className='mb-0'>$U260.00</p>
          <p className='price-subtittle'>$U260.00/500ml</p>
          <div ><p className='mb-1'>Cantidad</p>
          
          <div className='d-flex '>
          <button  className="amountbtn "onClick={disminuirCantidad}>-     </button>
          <input type="number" value={cantidad} className='cantidad  mb-4'/>
          <button onClick={aumentarCantidad} className='amountbtn'>+</button></div>
          </div>
         
          <button className="add-to-cart btn-pill w-500">Añadir al carrito</button>
          <div className="mt-5">
        <h2>Descripción</h2>
        <p>
          Nuestro Pure Green Juice está hecho con una combinación de ingredientes frescos y naturales, como apio, pepino, manzana y espinaca. Sin aditivos ni conservantes, solo lo mejor de la naturaleza para tu bienestar.
        </p>
      </div>
      <hr />
      <div><h3>Conservación</h3>
      <p>Conservar entre 2°C - 7°C y consumir dentro de 7 dias de la fecha de elaboración. Luego de abierto, consumir dentro de 24 horas preferentemente. </p></div>
        <div>
        <i class="bi bi-whatsapp mx-1 iconWpp"></i>
        <i class="bi bi-facebook mx-1 iconFacebook"></i>
        </div>
        
        </div>
      </div>
   

     
    </div>
       <div className='container' >
       <CarouselProducts />
     </div>
   </div>
  );
};

export default ProductPage;
