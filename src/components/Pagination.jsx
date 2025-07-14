import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.length > 0 && (
        <div className="flex flex-wrap items-center justify-center">
          {products.slice(page * 10 - 10, page * 10).map((item) => (
            <span>
              <img src={item.thumbnail} alt="" />
              <span>{item.title}</span>
            </span>
          ))}
        </div>
      )}

      {products.length > 0 && (
        <div className="flex justify-center items-center mt-10 pb-10">
          <span>◀️</span>
          {[...Array(products.length / 10)].map((_, index) => {
            return <span key={index}>{index + 1}</span>;
          })}
          <span>▶️</span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
