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
                src={`${import.meta.env.VITE_SUPABASE_URL}/trafigura.webp`}
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src={`${import.meta.env.VITE_SUPABASE_URL}/brote.webp`}
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src={`${import.meta.env.VITE_SUPABASE_URL}/devoto.webp`}
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src={`${import.meta.env.VITE_SUPABASE_URL}/disco.webp`}
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src={`${import.meta.env.VITE_SUPABASE_URL}/geant.webp`}
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src={`${import.meta.env.VITE_SUPABASE_URL}/labici.webp`}
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src={`${import.meta.env.VITE_SUPABASE_URL}/lamolienda.webp`}
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src={`${import.meta.env.VITE_SUPABASE_URL}/madretierra.webp`}
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src={`${import.meta.env.VITE_SUPABASE_URL}/olopoke.webp`}
                alt=""
                className="w-100"
              />
            </div>
            <div>
              <img
                src={`${import.meta.env.VITE_SUPABASE_URL}/ramm.webp`}
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
