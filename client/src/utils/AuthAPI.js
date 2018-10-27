import axios from "axios";

export default {

  patientLogin: function(loginData) {
    return axios.post("/login", loginData);
  },
  patientLogout: function() {
    return axios.get("/logout");
  },
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

};