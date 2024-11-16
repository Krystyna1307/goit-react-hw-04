import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  return (
    <div className={s.gallery}>
      <ul className={s.list}>
        {images.map((image) => (
          <li className={s.item} key={image.id}>
            <a href={image.urls.regular}>
              <ImageCard image={image} onClick={onClick} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
