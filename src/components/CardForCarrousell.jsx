import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CarCard({ juice }) {
  const handleScrollToTop=()=>{
    window.scrollTo(0, 0);
  
  };
  return (
    <Card
      key={juice.id}
      className="cardComp"
      style={{ width: "10rem", border: "none" }}
    >
      <Link to={`/product/${juice.slug}`}
      onClick={handleScrollToTop}>
      
        <Card.Img
          variant="top"
          src={`../../images/Products/Juices/${juice.image}.jpg`}
          className="juiceImage"
        />
      </Link>

      <Card.Body>
        <Card.Title className="text-center fs-6">{juice.name}</Card.Title>
        <Card.Text className="text-center text-success text-dark">
          $U {juice.price}
        </Card.Text>
        <div className="text-center"></div>
      </Card.Body>
    </Card>
  );
}

export default CarCard;
