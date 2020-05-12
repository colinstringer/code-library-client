import axios from "axios";
import { apiUrl } from "../../config/constants";

import { appLoading, appDoneLoading, setMessage } from "../appState/actions";

export const FETCH_CURRENT_PAGE = "FETCH_CURRENT_PAGE";

const fetchPage = (page) => {
  return {
    type: FETCH_CURRENT_PAGE,
    payload: page,
  };
};

export const fetchCurrentPage = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/current-page/${id}`);

      dispatch(fetchPage(response.data));
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
