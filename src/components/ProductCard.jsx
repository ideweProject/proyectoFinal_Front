import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image1 from "../assets/naranja.jpg";

function ProductCard() {
  return (
    <Card className="cardComp" style={{ width: "15rem", border: "none" }}>
      <Card.Img className="juiceImage" variant="top" src={image1} />
      <Card.Body>
        <Card.Title className="text-center">{juice.name}</Card.Title>
        <Card.Text className="text-center text-success">
          $U {juice.price}
        </Card.Text>
        <div className="text-center">
          <Button
            className="cardBtn rounded-pill px-3 bg-dark text-white"
            variant=""
          >
            Agregar al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
