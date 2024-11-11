import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function CarouselBrands() {
  function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
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
      <div className="d-flex w-100 justify-content-center">
        <div className="carousel-container   ">
          <Slider {...settings}>
            <div>
              <img
                src="../../images/img_brands/trafigura.webp"
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src="../../images/img_brands/brote.webp"
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src="../../images/img_brands/devoto.webp"
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src="../../images/img_brands/disco.webp"
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src="../../images/img_brands/geant.webp"
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src="../../images/img_brands/labici.webp"
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src="../../images/img_brands/lamolienda.webp"
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src="../../images/img_brands/madretierra.webp"
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src="../../images/img_brands/olopoke.webp"
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src="../../images/img_brands/ramm.webp"
                alt=""
                className="w-100"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default CarouselBrands;
