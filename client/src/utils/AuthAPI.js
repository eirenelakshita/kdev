import axios from "axios";

export default {
  isAuthenticated: function() {
    return axios.get("/isauth");
  },
  tryme: async function() {
    const response = await axios.get("/tryme");
    return response.data.isAuth;
  },
  trymeTwo: function() {
    return axios.get("/tryme");
  }
}