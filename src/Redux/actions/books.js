import Axios from "axios";
const id = localStorage.getItem("id");
const token = localStorage.getItem("KEY_TOKEN");
export const getAllBook = page => {
  return {
    type: "GET_BOOK",
    payload: Axios.get(`/api/v1/books/?page=${page}`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Guntur",
        "User-token": id,
        "x-token": "barier " + token
      }
    })
  };
};

export const getBookById = id => {
  return {
    type: "GET_BOOK_BY_ID",
    payload: Axios.get("/api/v1/books/" + id)
  };
};

export const postNewBook = data => {
  return {
    type: "POST_BOOK",
    payload: Axios.post("/api/v1/books/add", data)
  };
};

export const updateBookData = (id, newData) => {
  return {
    type: "EDIT_BOOK",
    payload: Axios.patch("/api/v1/books/update/" + id, newData)
  };
};

export const deleteBookData = id => {
  return {
    type: "DELETE_BOOK",
    payload: Axios.delete("/api/v1/books/delete/" + id)
  };
};

export const borrowBook = (id, available) => {
  return {
    type: "BORROW_BOOK",
    payload: Axios.patch("/api/v1/books/rent/" + id, available)
  };
};

export const returnBook = (id, available) => {
  return {
    type: "RETURN_BOOK",
    payload: Axios.patch("/api/v1/books/return/" + id, available)
  };
};

export const searchBookTitle = title => {
  return {
    type: "SEARCH_BOOK",
    payload: Axios.get("/api/v1/books?search=" + title)
  };
};

export const sortBookBy = (column, sort) => {
  return {
    type: "SORT_BOOK",
    payload: Axios.get(`/api/v1/books?sortBy=${column}&sort=${sort}`)
  };
};
