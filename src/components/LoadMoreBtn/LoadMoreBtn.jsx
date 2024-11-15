import React from "react";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  const handleClickLoadMore = (page) => {
    onClick(page);
  };

  return (
    <div className={s.wrapper}>
      <button onClick={handleClickLoadMore}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
