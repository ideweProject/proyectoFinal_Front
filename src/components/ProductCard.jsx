import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image1 from "../assets/naranja.jpg";

function BasicExample() {
  return (
    <Card className="shadow border" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Card.Title className="text-center">Yellow Juice</Card.Title>
        <Card.Text className="text-center text-success">$U 260</Card.Text>
        <div className="text-center">
          <Button
            className="rounded-pill px-3 bg-dark text-white"
            variant=""
          >
            Agregar al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
