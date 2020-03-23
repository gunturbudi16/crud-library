import { combineReducers } from "redux";
import bookReducers from "./books";
import genreReducers from "./genres";
import userReducers from "./users";

const reducers = combineReducers({
  book: bookReducers,
  genre: genreReducers,
  user: userReducers
});

export default reducers;
