import React from "react";
import ProductCard from "./ProductCard";

function Jugos() {
    return (

        <div className="container d-flex justify-content center h-100">
            <div className="row">
            </div>
          <div className="row g-3">
            <div className="col-4">
              <ProductCard />
            </div>
            <div className="col-4">
              <ProductCard />
            </div>
            <div className="col-4">
              <ProductCard />
            </div>
            <div className="col-4">
              <ProductCard />
            </div>
            <div className="col-4">
              <ProductCard />
            </div>
            <div className="col-4">
              <ProductCard />
            </div>
          </div>
        </div>
      );
}

export default Jugos;
