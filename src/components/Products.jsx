import React from 'react';
import Cartel from "./Cartel";
const productosData = [
  { id: 1, nombre: 'Celery juice', precio: "280,00", imagen: "https://static.wixstatic.com/media/a9b61d_c49afa33446142178af6161206a9ee4c~mv2.jpg/v1/fill/w_226,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a9b61d_c49afa33446142178af6161206a9ee4c~mv2.jpg" },
  { id: 2, nombre: 'Yellow juice', precio: "260,00", imagen: 'https://static.wixstatic.com/media/f0020d_fcbd347e69a442e0bc05aa0784ceb4d0~mv2.jpg/v1/fill/w_226,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f0020d_fcbd347e69a442e0bc05aa0784ceb4d0~mv2.jpg' },
  { id: 3, nombre: 'Orange juice', precio: "260,00", imagen: 'https://static.wixstatic.com/media/f0020d_d0999904bd9647f7b2864a5e314607ff~mv2.jpg/v1/fill/w_226,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f0020d_d0999904bd9647f7b2864a5e314607ff~mv2.jpg' },
  { id: 4, nombre: 'Pure green juice', precio: "260,00", imagen: 'https://static.wixstatic.com/media/f0020d_b80b280113064d7d9b569e9ecaf726a0~mv2.jpg/v1/fill/w_203,h_203,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f0020d_b80b280113064d7d9b569e9ecaf726a0~mv2.jpg' },
  { id: 5, nombre: 'Brown juice', precio: "260,00", imagen: 'https://static.wixstatic.com/media/f0020d_263c789b475849f4aefe2e1b8b8e0539~mv2.jpg/v1/fill/w_226,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f0020d_263c789b475849f4aefe2e1b8b8e0539~mv2.jpg' },
  { id: 6, nombre: 'Red Juice ', precio: "260,00", imagen: 'https://static.wixstatic.com/media/f0020d_cda09811ccca4118ac295502a6bcf7a3~mv2.jpg/v1/fill/w_203,h_203,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f0020d_cda09811ccca4118ac295502a6bcf7a3~mv2.jpg' },
  { id: 7, nombre:  "Carrot Juice", precio: "260,00", imagen: 'https://static.wixstatic.com/media/f0020d_6a28d5d110df4bc29232a198bb20fe33~mv2.jpg/v1/fill/w_203,h_203,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f0020d_6a28d5d110df4bc29232a198bb20fe33~mv2.jpg' },
  { id: 8, nombre: 'Green Juice', precio: "260,00", imagen: "https://static.wixstatic.com/media/f0020d_f2d58eca00234283b46dbacffa559fae~mv2.jpg/v1/fill/w_203,h_203,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f0020d_f2d58eca00234283b46dbacffa559fae~mv2.jpg" },
  
];

const Products = () => {
  return (
    <div className="bg-white productosPadre">
      <div><Cartel /></div>
   <div className='anchura'>
   <section className="productos">

<div className="producto-lista">
  {productosData.map((producto) => (
    <div key={producto.id} className="producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.nombre}</p>
      <p>$U{producto.precio}</p>
      <button className='btn btn-pill'>Agregar al carrito</button>
    </div>
  ))}
</div>
</section></div>
   </div>
    
  );
};

export default Products;
