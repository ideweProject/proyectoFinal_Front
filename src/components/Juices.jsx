import ProductCard from "./ProductCard";
import Banner from "./Banner";

function Juices() {
  return (
    <div>
      <div className="d-flex justify-content-center mb-5">
        <div>
          <Banner />
        </div>
      </div>
      <div className="d-flex justify-content-center g-2">
        <div className="w-50">
          <ProductCard />
        </div>
      </div>
    </div>

    // <div className="bg-white productosPadre">
    //   <div>
    //     <Banner />
    //   </div>
    //   <div className="anchura">
    //     <section className="productos">
    //       <div className="producto-lista">
    //         {productosData.map((producto) => (
    //           <div key={producto.id} className="producto">
    //             <img
    //               className="h-50"
    //               src={producto.imagen}
    //               alt={producto.nombre}
    //             />
    //             <p>{producto.nombre}</p>
    //             <p className="text-success">$U{producto.precio}</p>
    //             <button className="rounded-pill px-3 bg-dark text-white">
    //               Agregar al carrito
    //             </button>
    //           </div>
    //         ))}
    //       </div>
    //     </section>
    //   </div>
    // </div>
  );
}

export default Juices;
