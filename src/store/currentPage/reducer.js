import { FETCH_CURRENT_PAGE } from "./actions";

const initialState = {
  name: "",
  examples: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_PAGE:
      return action.payload;

    default:
      return state;
  }
};
