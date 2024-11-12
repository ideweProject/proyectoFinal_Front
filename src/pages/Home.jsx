import React from "react";
import NavbarComp from "../components/NavbarComp";
import CarouselComp from "../components/CarouselComp";
import SectionFeatures from "../components/SectionFeatures";
import CarouselBrands from "../components/CarouselBrands";
import ShippingHeader from "../components/ShippingHeader";

function Home() {
  return (
    <div>
      <ShippingHeader />
      <div className="flex flex-col h-full main-container">
        <section className="video-section">
          <div className="video-container text-center p-0 m-0">
            <video
              autoPlay
              loop
              muted
              id="video-vibraco"
              className="video-vibraco"
              src="./videos/file.mp4"
              type="video/mp4"
            ></video>
            <div className="text-video">
              <img
                src="./images/img_pages/vibracowhite.png"
                className="logo-video"
                alt=""
              />
              <p className="title-video">JUGO PRENSADO EN FRIO</p>
              <p className="text">Hechos con ingredientes de origen vegetal</p>
              <span className="text">Saber mas</span>
            </div>
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
        <section className="brands-section">
          <CarouselBrands />
        </section>
      </div>
    </div>
  );
}

export default Home;
