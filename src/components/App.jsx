import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import axios from "axios";

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?client_id=uIDxmkSbmKZab56d796f3xkULhRzGMhUmXAaOYp_104&query=cats"
      )
      .then((res) => setImages(res.data.results));
  }, []);

  return (
    <div>
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
