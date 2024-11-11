import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({ name, price, image }) {
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
        src={`./images/Products/Juices/${image}.jpg`}
        //src={`../../public/images/Products/juices/${image}.jpg`}
      />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text className="text-center text-success">$U {price}</Card.Text>
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
