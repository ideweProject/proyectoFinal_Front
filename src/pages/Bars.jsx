import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { saveBars } from "../redux/barsSlice";

function Bars() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.bars);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products/bars?cat=bars`,
      });

      dispatch(saveBars({ bars: response.data }));
    };
    getProducts();
  }, []);

  const bars = useSelector((state) => state.bars);
  return (
    <div>
      <div>
        <div className="bg-white productosPadre">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            {" "}
            <h1>RAW BAR</h1>
            <p>Snack Saludable</p>
            <p>
              Descubrí las barras energéticas hechas con ingredientes de origen
              vegetal.
            </p>
          </div>
        </div>
      </div>

      <div className="container w-50">
        <div className="row g-3 mb-5">
          {bars.map((bar) => (
            <div className="col-xl-4 col-lg-6 col-sm-12" key={bar.id}>
              <ProductCard barsData={bar} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bars;
