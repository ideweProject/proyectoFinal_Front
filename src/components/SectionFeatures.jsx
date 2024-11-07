import React from "react";

function SectionFeatures() {
  return (
    <>
      <div className="container">
        <div className="gif-container mt-4 ">
          <video autoPlay loop muted id="gif-vibraco">
            <source src="../videos/GIF.mp4" />
          </video>
        </div>
        <div className="bars-banner ">
          <img src="../../images/img_pages/bars.jpg" alt="" className="w-100" />
        </div>
        <div className="worker-section ">
          <div className="grid-container ">
            <div className="grid-item bg-black text-white">
              <div className="text-center mt-5">
                <img
                  src="./images/img_pages/vibracologowhite.webp"
                  className="mt-5"
                  alt=""
                />
                <p>Somos un equipo apasionado y capacitado en lo que hacemos.</p>
              </div>
            </div>
            <div className="grid-item bg-danger">
              <img src="../../images/img_pages/worker.webp" alt="" />
            </div>
          </div>
        </div>
      </div>

      <section className="cards-section mt-5 ">
        <div className="container d-flex ">
          <div className="row">
            <div className="col">
              <img
                src="../../images/img_pages/vibra-gingershot.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col">
              <img
                src="../../images/img_pages/vibraco-card01.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col">
              <img
                src="../../images/img_pages/vibraco-card06.jpg"
                alt=""
                className="img-fluid card-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="send-info-container">
          <div className="container bg-black text-white p-5">
            <div className="row">
              <div className="col-6 ">
                <div className="send-text text-end ms-auto">
                  <h4>Envíos a domicilio</h4>
                  <p>Montevideo, Ciudad de la Costa y Maldonado.</p>
                  <p>
                    Antes de finalizar la compra, se puede seleccionar la opción
                    de envío y estará siendo entregado el pedido a domicilio de
                    24 a 48 hs.
                  </p>
                </div>
              </div>
              <div className="col-6 border-start">
                <div className="pickup-text">
                  <h4>Retiro de su compra</h4>
                  <p>Montevideo - Tres cruces</p>
                  <p>
                    Se puede seleccionar retirar la compra en Martín García
                    2381, luego de recibir un mail con la confirmación.
                  </p>
                </div>
              </div>
              <span className="text-center">Tienda</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionFeatures;
