import axios from "axios";

export default {
  // Gets all books
  getListings: function () {
    return axios.get("/api/listings");
  },
  // Gets the book with the given id
  getListing: function (id) {
    return axios.get("/api/listings/" + id);
  },
  // Deletes the book with the given id
  deleteListing: function (id) {
    return axios.delete("/api/listings/" + id);
  },
  // Saves a book to the database
  saveListing: function (listingData) {
    return axios.post("/api/listings", listingData);
  }
};
