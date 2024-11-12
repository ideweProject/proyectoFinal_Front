import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { saveJuices } from "../redux/juicesSlice";
import React, { useEffect, useState } from "react";

function Juices() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.juices);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products/juices?cat=juices`,
      });

      dispatch(saveJuices({ juices: response.data }));
    };
    getProducts();
  }, []);

  const juices = useSelector((state) => state.juices);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Banner />
      </div>
      <div className="container w-50">
        <div className="row g-3 mb-5">
          {juices.map((juice) => (
            <div className="col-xl-4 col-lg-6 col-sm-12" key={juice.id}>
              <ProductCard
                name={juice.name}
                price={juice.price}
                image={juice.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Juices;
