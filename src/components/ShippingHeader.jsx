import React from "react";

function ShippingHeader() {
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
