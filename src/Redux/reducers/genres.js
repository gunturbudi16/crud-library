const initialValue = {
  genreData: [],
  errorMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const genreReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_GENRES_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_GENRES_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errorMsg: action.payload.data
      };
    case "GET_GENRES_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        genreData: action.payload.data
      };
    default:
      return state;
  }
};

export default genreReducers;
