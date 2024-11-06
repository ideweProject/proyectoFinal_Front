import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function CarouselBrands() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <img
              src="../../images/img_brands/trafigura.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="../../images/img_brands/brote.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="../../images/img_brands/devoto.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="../../images/img_brands/disco.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="../../images/img_brands/geant.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="../../images/img_brands/labici.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="../../images/img_brands/lamolienda.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="../../images/img_brands/madretierra.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="../../images/img_brands/olopoke.webp"
              alt=""
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src="../../images/img_brands/ramm.webp"
              alt=""
              className="img-fluid"
            />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default CarouselBrands;
