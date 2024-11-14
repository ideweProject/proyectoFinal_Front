import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Cart from "./Cart";

function ProductCard({ productData }) {
  const dispatch = useDispatch();

  const handleShowCart = () => {
    const [show, setShow] = useState(false);
    <Cart show={true} />;
  };

  const handleAddItem = (clickedItem) => {
    dispatch(
      addToCart({
        id: productData.id,
        name: productData.name,
        price: productData.price,
        image: productData.image,
      })
    );
  };

  return (
    <Card
      className="cardComp"
      style={{
        width: "15rem",
        border: "none",
        transition: "border-color 0.3s ease",
      }}
    >
      <Card.Img
        className="juiceImage img-fluid"
        variant="top"
        src={`./images/Products/Juices/${productData.image}.jpg`}
        //src={`../../public/images/Products/juices/${image}.jpg`}
      />
      <Card.Body>
        <Card.Title className="text-center">{productData.name}</Card.Title>
        <Card.Text className="text-center text-success">
          $U {productData.price}
        </Card.Text>

        <div className="text-center">
          <Button
            className="cardBtn rounded-pill px-3 bg-dark text-white"
            variant=""
            onClick={() => {
              handleShowCart;
              handleAddItem({ productData });
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
