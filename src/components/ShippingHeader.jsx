import React from "react";
import { useLocation } from "react-router-dom";

function ShippingHeader() {

  // function shippingHeader() {
  //   const location = useLocation();
  //   // jugos/bars/product/about/chaeckout
  //   if (location.pathname === "/jugos") {
  //     return null;
  //   }
  // }
  // shippingHeader();

  return (
    <div>
      <header>
        <div className="msg-container py-1 text-white d-flex justify-content-center align-items-center ">
          <div>
            <p className="shippingNav d-inline">
              {" "}
              Envios gratis dentro de Montevideo, Ciudad de la Costa y Maldonado
            </p>

            <i className="bi bi-truck ms-2"></i>
          </div>
        </div>
      </header>
    </div>
  );
}

export default ShippingHeader;
