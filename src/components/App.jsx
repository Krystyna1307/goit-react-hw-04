import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "../services/api";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, page, per_page } = await fetchImages();

        setImages(results);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <SearchBar />
      {isError && <ErrorMessage />}
      <ImageGallery images={images} />
      {isLoading && <Loader />}
    </div>
  );
};

export default App;

// axios
//       .get(
//         `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=cats&page=3&per_page=12`
//       )
//       .then((res) => setImages(res.data.results));
