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

  useEffect(() => {
    if (!query) return;
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
        // toast.success("Successfully toasted!");
      }
    };
    getData();
  }, [page, query]);

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

      <LoadMoreBtn onClick={handleClickMore} />
    </div>
  );
};

export default App;

// axios
//       .get(
//         `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=cats&page=3&per_page=12`
//       )
//       .then((res) => setImages(res.data.results));
