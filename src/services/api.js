import axios from "axios";

const API_KEY = "57822694-3a0a50e53f642a2ee804a5505";

axios.defaults.baseURL = "https://pixabay.com/api/";

const fetchImages = ({ searchQuery = "", pageSize = 12, currentPage = 1 }) => {
  return axios.get("", {
    params: {
      key: API_KEY,
      q: searchQuery,
      per_page: pageSize,
      page: currentPage,
    },
  });
};

export default fetchImages