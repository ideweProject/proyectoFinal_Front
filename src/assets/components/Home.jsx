import React from "react";
import NavbarComp from "./NavbarComp";
import CarouselComp from "./CarouselComp";
import SectionFeatures from "./SectionFeatures";

function Home() {
  return (
    <div className="flex flex-col h-full">
      <header>
        <div className="msg-container text-center py-3 bg-black text-white">
          <i className="bi bi-truck">
            {" "}
            Envios gratis dentro de Montevideo, Ciudad de la Costa y Maldonado
          </i>
        </div>

        <div className="nav-container">
          <NavbarComp />
        </div>
      </header>

      <section className="video-section">
        <div className="video-container">
          <p>Jugo prensado en frio</p>
          <p>Hechos con ingredientes de origen vegetal</p>
          <span>Saber mas</span>
        </div>
      </section>

      <section className="products-section">
        <div className="products-container">
          <CarouselComp />
        </div>
      </section>
      <section className="features-section">
        <SectionFeatures />
      </section>
    </div>
  );
}

export default Home;
