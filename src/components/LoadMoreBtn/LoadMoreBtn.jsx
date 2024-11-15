import React from "react";

const LoadMoreBtn = ({ onClick }) => {
  const handleClickLoadMore = (page) => {
    onClick(page);
  };

  return (
    <div>
      <button onClick={handleClickLoadMore}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
