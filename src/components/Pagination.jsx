import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / 10));
    }
  };

  const handlePage = (index) => {
    setPage(index);
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    } else setPage(totalPages);
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    } else setPage(1);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div>
      {products.length > 0 && (
        <div className="flex flex-wrap items-center justify-center ">
          {products.map((item) => (
            <span>
              <img src={item.thumbnail} alt="" />
              <span>{item.title}</span>
            </span>
          ))}
        </div>
      )}

      {products.length > 0 && (
        <div className="flex justify-center gap-5 items-center mt-10 pb-10">
          <span onClick={handlePrevious}>◀️</span>
          {[...Array(totalPages)].map((_, index) => {
            return (
              <span
                onClick={() => handlePage(index + 1)}
                className={`bg-white text-black px-2 cursor-pointer ${
                  page === index + 1
                    ? "text-red-500 font-extrabold scale-110"
                    : ""
                } `}
                key={index}
              >
                {index + 1}
              </span>
            );
          })}
          <span onClick={handleNext}>▶️</span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
