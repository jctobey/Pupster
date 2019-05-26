import axios from "axios";
const query = "https://dog.ceo/api/breeds/image/random";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: () => {
    return axios.get(query);
  }
};
