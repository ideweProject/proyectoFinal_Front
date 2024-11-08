import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image1 from "../assets/naranja.jpg"

function CarCard({ juice }) {
  return (
    <Card
      key={juice.id}
      className="cardComp"
      style={{ width: "10rem", border: "none" }}
    >
      <Card.Img
        variant="top"
        src={image1}
        className="juiceImage"
      />
      <Card.Body>
        <Card.Title className="text-center fs-6">{juice.name}</Card.Title>
        <Card.Text className="text-center text-success text-dark">
          $U {juice.price}
          <div className="cardfs">{juice.price}/500ml</div>
        </Card.Text>
        <div className="text-center">
          
        </div>
      </Card.Body>
    </Card>
  );
}

export default CarCard;
