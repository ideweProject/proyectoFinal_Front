import React from "react";


function Cartel() {



  return (
    <div className="container row bannerContainer mt-5">
      <div className="col-4 divisor align-items-center naturales">
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div className="d-flex justify-content-center">
            <div className="fs-3 d-flex">Jugos 100% naturales</div>
          </div>
          <div>
            Hacemos envíos dentro de Montevideo, Ciudad de la Costa y Maldonado.
            Además, también podes pasar a buscar el pedido por el local.
          </div>
        </div>
      </div>
      <div className="col-4 g-0 juicesImgCol">
        <div className="bannerCenterImg w-100 d-inline-block  ">
          <img
            className=" imgJuices"
            src="../../images/img_pages/vibraco-card04.jpg"
            alt=""
          />
        
        </div>
      </div>
      <div className="col-4 divisor align-items-center freeze">
        <div>
          <div className="fs-3">Freeze</div>
          <div className="">
            Se entregan los jugos congelados para que duren más tiempo en el
            freezer y conserven todos sus nutrientes por más tiempo.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cartel;
