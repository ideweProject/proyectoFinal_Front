import React from "react";

function Cartel() {
  return (
    <div className="container row bannerContainer mt-5">
      <div className=" col-lg-4 col-md-6 bannerContainer2  divisor align-items-center naturales">
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div className="d-flex justify-content-center">
            <div className="fs-3 nat100Title d-flex">Jugos 100% naturales</div>
          </div>
          <div className="bannerText">
            Hacemos envíos dentro de Montevideo, Ciudad de la Costa y Maldonado.
            Además, también podés pasar a buscar el pedido por el local.
          </div>
        </div>
      </div>
      <div className=" col-4 d-none d-lg-block g-0 juicesImgCol">
        <div className="bannerCenterImg w-100 d-inline-block  ">
          <img
            className=" imgJuices"
            src={`${import.meta.env.VITE_SUPABASE_URL}/vibraco-card04.jpg`}
            alt=""
          />
        </div>
      </div>
      <div className=" col-lg-4 col-md-6  d-none d-md-block divisor freeze">
        <div>
          <div className="fs-3 freezeTitle">Freeze</div>
          <div className="bannerText2">
            Se entregan los jugos congelados para que duren más tiempo en el
            freezer y conserven todos sus nutrientes por más tiempo.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cartel;
