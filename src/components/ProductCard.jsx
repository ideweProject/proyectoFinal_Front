import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image1 from "../assets/naranja.jpg";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { saveJuices } from "../redux/juicesSlice";
import React, { useEffect, useState } from "react";

function ProductCard() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.juices);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products/jugos`,
      });

      dispatch(saveJuices({ juices: response.data }));
    };
    getProducts();
  }, []);

  const juices = useSelector((state) => state.juices);
  return (
    <div className="row g-3 mb-5">
      {juices.map((juice) => (
        <div className="col-4" key={juice.id}>
          <Card
            key="juice.id"
            className="cardComp"
            style={{ width: "15rem", border: "none" }}
          >
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
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
