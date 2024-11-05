import React from "react";

function SectionFeatures() {
  return (
    <>
      <div className="container mt-5">
        <div className="gif-container ">gif</div>
        <div className="row">
          <div className="col-4">Sin azucares agregados</div>
          <div className="col-4">Sin conservantes</div>
          <div className="col-4">Sin pasteurizar</div>
        </div>
      </div>
      <div className="bars-banner ">
        <img src="../../images/img_pages/bars.jpg" alt="" className="w-100" />
      </div>

      <div className="worker-section ">
        <div className="grid-container ">
          <div className="grid-item bg-black text-white">
            <span></span>
            <p>Somos un equipo apasionado y capacitado en lo que hacemos.</p>
          </div>
          <div className="grid-item bg-danger">
            <img src="../../images/Img_pages/worker.webp" alt="" />
          </div>
        </div>
      </div>

      <section className="cards-section mt-5 ">
        <div className="container d-flex ">
          <div className="row g-5 images-row">
            <div className="col-4 ">
              <img
                src="../../images/img_pages/vibra-gingershot.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-4">
              <img
                src="../../images/img_pages/vibraco-card01.jpg"
                alt=""
                className="img-fluid"
              />
            </div>{" "}
            <div className="col-4 ">
              <img
                src="../../images/img_pages/vibraco-card06.jpg"
                alt=""
                className="img-fluid card-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionFeatures;
