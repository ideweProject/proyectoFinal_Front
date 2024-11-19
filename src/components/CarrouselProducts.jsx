import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import CarCard from "./CardForCarrousell";

function CarouselProducts() {
  const juices = useSelector((state) => state.juices.items);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
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
    prevArrow: (
      <button className="slick-previous">
        <span className="previus-arrow">&#10094;</span> {/* Flecha izquierda */}
      </button>
    ),
    nextArrow: (
      <button className="slick-nextt">
        <span className="nextt-arrow">&#10095;</span> {/* Flecha derecha */}
      </button>
    ),
  };

  return (
    <div>
      <Slider {...settings}>
        {juices.map((juice) => (
          <div key={juice.id}>
            <CarCard juice={juice} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselProducts;
