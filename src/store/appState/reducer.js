import {
  APP_LOADING,
  APP_DONE_LOADING,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  SET_CURRENT_LIBRARY_USERNAME_DEFAULT,
  SET_CURRENT_LIBRARY_USERNAME,
} from "./actions";

const initialState = {
  loading: false,
  message: null,
  currentLibraryUsername: localStorage.getItem("currentLibraryUsername"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADING:
      return { ...state, loading: true };

    case APP_DONE_LOADING:
      return { ...state, loading: false };

    case SET_MESSAGE:
      return { ...state, message: action.payload };

    case CLEAR_MESSAGE:
      return { ...state, message: null };

    case SET_CURRENT_LIBRARY_USERNAME_DEFAULT:
      localStorage.setItem("currentLibraryUsername", "admin");
      return { ...state, currentLibraryUsername: "admin" };

    case SET_CURRENT_LIBRARY_USERNAME:
      localStorage.setItem("currentLibraryUsername", action.payload);
      return { ...state, currentLibraryUsername: action.payload };

    default:
      return state;
  }
};
