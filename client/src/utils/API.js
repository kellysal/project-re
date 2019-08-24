import axios from "axios";

export default {
  // Gets all listings
  getListings: function () {
    return axios.get("/api/listings");
  },
  // Gets the listing with the given id
  getListing: function (id) {
    return axios.get("/api/listings/" + id);
  },
  // Deletes the listing with the given id
  deleteListing: function (id) {
    return axios.delete("/api/listings/" + id);
  },
  // Saves a listing to the database
  saveListing: function (listingData) {
    return axios.post("/api/listings", listingData);
  },
  authUser: function (email, password) {
    return axios.post("/api/user/auth", { email, password });
  },
  getListingByUser: function (id) {
    console.log(id);
    return axios.get("/api/listings/user/" + id);
  }
};
