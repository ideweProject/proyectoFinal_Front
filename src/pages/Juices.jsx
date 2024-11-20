import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { saveJuices, setFilter } from "../redux/juicesSlice";
import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Juices() {
  const dispatch = useDispatch();
  
  

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products/juices?cat=juices`,
      });

      dispatch(saveJuices({ items: response.data }));
    };
    getProducts();
  }, []);

  const items = useSelector((state) => state.juices.items);
  const filter = useSelector((state) => state.juices.filter);

  const filteredJuices = items.filter((juice) =>
    juice.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Banner />
      </div>

      <div className="container d-flex justify-content-center w-50 mt-4">
        <InputGroup size="" className="mb-3 w-50">
          <Form.Control
            aria-label="Buscar"
            aria-describedby="inputGroup-sizing-lg"
            placeholder="Buscar"
            value={filter}
            onChange={(e) => {
              dispatch(setFilter(e.target.value));
            }}
          />
        </InputGroup>
      </div>

      <div className="container w-75 mt-5">
        <div className="row g-3 mb-5">
          {filteredJuices.map((juice) => (
            <div className="col-xl-3 col-lg-6 col-sm-12" key={juice.id}>
              <ProductCard productData={juice} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Juices;
