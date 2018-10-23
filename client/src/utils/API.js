import axios from "axios";


export default {
  postMessage: function(input) {
    return axios.post("/api/messages", input);
  },
  getRx: function() {
    return axios.get("/api/rx");
  },
   // Gets all visits
   getVisits: function() {
    return axios.get("/api/visits");
  },

  // Gets the book with the given id
  getVisit: function(id) {
    return axios.get("/api/visits/" + id);
  },
  // Deletes the book with the given id
  deleteVisit: function(id) {
    return axios.delete("/api/visits/" + id);
  },
  // Saves a book to the database
  saveVisit: function(visitData) {
    return axios.post("/api/visits", visitData);
  }
};
