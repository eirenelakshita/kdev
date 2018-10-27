import axios from "axios";
import { ftruncate } from "fs";


export default {

  //Lab Result for XRay test
  getLabresultXRay: function(){
    return axios.get("/api/xRay");
  },


  //Lab Result for Drug test
  getLabresultDrug: function(){
    return axios.get("/api/drug");
  },
  

  //Lab Result for Blood test
  getLabresultBlood:function(){
      return axios.get("/api/blood");
  },

  postMessage: function(input) {
    return axios.post("/api/messages", input);
  },

  getRx: function() {
    return axios.get("/api/rx");
  },

  getVisits: function() {
    return axios.get("/api/visits");
  },
  getVisit: function(id) {
    return axios.get("/api/visits/" + id);
  },
  deleteVisit: function(id) {
    return axios.delete("/api/visits/" + id);
  },
  saveVisit: function(visitData) {
    return axios.post("/api/visits", visitData);
  }
};
