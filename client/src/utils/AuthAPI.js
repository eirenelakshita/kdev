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
  }
  
};