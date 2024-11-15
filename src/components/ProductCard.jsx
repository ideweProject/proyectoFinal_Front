import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleOffcanvas } from "../redux/pagesSlice";
import { Navigate, useNavigate } from "react-router-dom";


import Cart from "./Cart";

function ProductCard({ juicesData,barsData}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowCart = () => {
    dispatch(toggleOffcanvas());
  };
  const handleCardClick = () => {
    navigate("/product");
  };

  const handleAddItem = (clickedItem) => {
    dispatch(
      addToCart({
        id: juicesData.id,
        name: juicesData.name,
        price: juicesData.price,
        image: juicesData.image,
      })
    );
  };

  return (
    <Card
      className="cardComp"
      onClick={useNavigate("/product")}
      style={{
        width: "15rem",
        border: "none",
        transition: "border-color 0.3s ease",
      }}
    >
      <Card.Img
       onClick={handleCardClick}
       className="juiceImage img-fluid"
        variant="top"
        src={`./images/Products/Juices/${juicesData.image}.jpg`}
        //src={`../../public/images/Products/juices/${image}.jpg`}
      />
      <Card.Body>
        <Card.Title className="text-center">{juicesData.name}</Card.Title>
        <Card.Text className="text-center text-success">
          $U {juicesData.price}
        </Card.Text>

        <div className="text-center">
          <Button
            className="cardBtn rounded-pill px-3 bg-dark text-white"
            variant=""
            onClick={() => {
              handleShowCart();
              handleAddItem({ juicesData });
            }}
          >
            Agregar al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
