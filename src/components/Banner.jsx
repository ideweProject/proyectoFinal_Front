import React from "react";

function Cartel() {
  return (
    <div class="container mt-5 mx-5">
      <div class="row d-flex   align-items-center">
        <div class="col-4 divisor align-items-center naturales">
          <div>
            <div>
              <img
                src="https://static.wixstatic.com/media/a9b61d_04587018d69b4fc399ce7690945bc9ff~mv2.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/leaf.png"
                alt=""
              />
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
        <div class="col-4 divisor align-items-center freeze">
          <div>
            <div>
              <img
                src="https://static.wixstatic.com/media/a9b61d_8e4ae34404584dedad0b47c885ba0bba~mv2.png/v1/fill/w_32,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/freezing.png"
                alt=""
              />
            </div>
            <div className="fs-3">Freeze</div>
            <div>
              Se entregan los jugos congelados para que duren más tiempo en el
              freezer y conserven todos sus nutrientes por más tiempo.
            </div>
          </div>
        </div>
        <div class="col-4 px-0">
          <div class=" border d-inline-block  me-5">
            <img
              className="img1 "
              src="https://static.wixstatic.com/media/a9b61d_44f60bafae5741f4b1d66ff756642672~mv2.jpg/v1/fill/w_418,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a9b61d_44f60bafae5741f4b1d66ff756642672~mv2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cartel;
