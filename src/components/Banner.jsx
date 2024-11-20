import React from "react";

function Cartel() {
  return (
    <div className="container mt-5 mb-4 mx-5 ">
      <div className="row d-flex   align-items-center ">
        <div className="col-4 divisor align-items-center naturales">
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <div className="fs-3 d-flex">Jugos 100% naturales</div>
            </div>
            <div>
              Hacemos envíos dentro de Montevideo, Ciudad de la Costa y
              Maldonado. Además, también podes pasar a buscar el pedido por el
              local.
            </div>
          </div>
        </div>
        <div className="col-4 g-0 py-3">
          <div className="bannerCenterImg w-100 d-inline-block ">
            <img
              className="img1 w-100"
              src="https://static.wixstatic.com/media/a9b61d_44f60bafae5741f4b1d66ff756642672~mv2.jpg/v1/fill/w_418,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a9b61d_44f60bafae5741f4b1d66ff756642672~mv2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-4 divisor align-items-center freeze">
          <div>
            <div>
              <i class="bi bi-snow2 fs-4"></i>
            </div>
            <div className="fs-3">Freeze</div>
            <div>
              Se entregan los jugos congelados para que duren más tiempo en el
              freezer y conserven todos sus nutrientes por más tiempo.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cartel;
