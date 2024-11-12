import React from "react";
import CardOrder from "../components/CardOrder";

function Order() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5 ">
      <h2>Historial de compra</h2>
      <p>Consulta el estado de pedidos recientes, gestiona devoluciones y descubre productos similares.</p>
      
      <CardOrder />
    </div>
  );
}

export default Order;
