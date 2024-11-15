import axios from "axios";

const ACCESS_KEY = "uIDxmkSbmKZab56d796f3xkULhRzGMhUmXAaOYp_104";

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${query}&page=${page}`
  );
  return response.data;
};

// `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${query}&page=3&per_page=12`
