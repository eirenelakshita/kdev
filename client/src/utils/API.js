import axios from "axios";


export default {
  // Gets the message submitted
  // getMessage: function() {
  //   return axios.get("/api/messages");
  // },
  postMessage: function(input) {
    
    return axios.post("/api/messages", input);
  }
};
