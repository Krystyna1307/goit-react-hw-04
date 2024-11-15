import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "../services/api";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const App = () => {
  const [images, setImages] = useState([]); //картинки
  const [isLoading, setIsLoading] = useState(false); //спінер
  const [isError, setIsError] = useState(false); // текст помилки
  const [query, setQuery] = useState(""); // пошук картинки
  const [page, setPage] = useState(1); // додаткові картинки

  const [totalPage, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total_pages } = await fetchImages(query, page);

        setTotalPages(total_pages);
        setImages((prev) => [...prev, ...results]);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
        // toast.success("Successfully toasted!");
      }
    };
    getData();
  }, [query, page, totalPage]);

  const handleChangeQuery = (query) => {
    setImages([]);
    setQuery(query);
    setPage(1);
  };

  const handleClickMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleChangeQuery} />
      {isError && <ErrorMessage />}
      <ImageGallery images={images} />
      {isLoading && <Loader />}

      {page < totalPage && images.length > 0 && (
        <LoadMoreBtn onClick={handleClickMore} />
      )}
    </div>
  );
};

export default App;
