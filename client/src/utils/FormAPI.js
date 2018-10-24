import axios from "axios";

export default {
  submitForm: function(data) {
    return axios.post("/api/identifyinginfo", data);
  }
};
