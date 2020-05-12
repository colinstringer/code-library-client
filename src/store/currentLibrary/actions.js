import axios from "axios";
import { apiUrl } from "../../config/constants";

import { selectCurrentLibraryUsername } from "../appState/selectors";
import { appLoading, appDoneLoading, setMessage } from "../appState/actions";

export const FETCH_CURRENT_LIBRARY = "FETCH_CURRENT_LIBRARY";

const fetchLibrary = (library) => {
  return {
    type: FETCH_CURRENT_LIBRARY,
    payload: library,
  };
};

export const fetchCurrentLibrary = () => {
  return async (dispatch, getState) => {
    let username = selectCurrentLibraryUsername(getState());

    if (!username || username === "undefined") username = "admin";

    dispatch(appLoading());

    try {
      const response = await axios.get(`${apiUrl}/library/${username}`);

      dispatch(fetchLibrary(response.data.library));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
