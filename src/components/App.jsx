import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "../services/api";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("nature");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchImages(query, page);

        setImages((prev) => [...prev, ...results]);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangeQuery = (query) => {
    setQuery(query);
  };

  const handleClickMore = (page) => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleChangeQuery} />
      {isError && <ErrorMessage />}
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      <LoadMoreBtn onClick={handleClickMore} />
      {page}
    </div>
  );
};

export default App;

// axios
//       .get(
//         `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=cats&page=3&per_page=12`
//       )
//       .then((res) => setImages(res.data.results));
