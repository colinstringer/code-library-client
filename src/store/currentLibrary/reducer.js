import { FETCH_CURRENT_LIBRARY } from "./actions";

const initialState = {
    categories: [
    ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_LIBRARY:
      return action.payload;

    default:
      return state;
  }
};
