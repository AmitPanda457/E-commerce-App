import { useEffect, useState } from "react";
import CardComponent from "./card";
import { getProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products = [] } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = searchTerm
    ? products.filter((product) => product?.title?.includes(searchTerm))
    : products;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <h1>Product Collections</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "8px",
            width: "250px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div className="row" style={{ padding: "20px" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((data) => (
            <CardComponent key={data.id} data={data} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Product;
