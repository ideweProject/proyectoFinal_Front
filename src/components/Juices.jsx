import ProductCard from "./ProductCard";
import Banner from "./Banner";

function Juices() {
  return (
    <div>
      <div className="d-flex justify-content-center mb-5">
        <div>
          <Banner />
        </div>
      </div>
      <div className="d-flex justify-content-center g-2">
        <div className="w-50">
          <ProductCard />
        </div>
      </div>
    </div>

  );
}

export default Juices;
