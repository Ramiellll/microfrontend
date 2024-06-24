import React from "react";
import { useQuery } from "react-query";

import "./sunglasses.scss";

const Sunglasses = () => {
  const { isLoading, error, data } = useQuery("products", () =>
    fetch("http://localhost:4000/products").then(
      (res) => res.json() as Promise<any>,
    ),
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occured " + error;

  return (
    <div className="grid-container">
      {data.map((product: any) => (
        <div className="grid">
          <div className="grid-item"></div>
          <span className="title">{product.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Sunglasses;
