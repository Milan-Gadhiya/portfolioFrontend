import { Axios } from "axios";
import { APP_LIST_FAIL, APP_LIST_SUCCESS } from "../constants/appConstants";
import {
  WEBSITE_LIST_FAIL,
  WEBSITE_LIST_SUCCESS,
} from "../constants/websiteConstants";

export const initialData = () => async (dispatch) => {
  try {
    const res = await Axios.post("/api/");
    if (res.status === 200) {
      const { apps, websites } = res.data;
      dispatch({
        type: APP_LIST_SUCCESS,
        payload: apps,
      });
      dispatch({
        type: WEBSITE_LIST_SUCCESS,
        payload: websites,
      });
    }
  } catch (error) {
    dispatch({
      type: APP_LIST_FAIL,
      payload: error.message,
    });
    dispatch({
      type: WEBSITE_LIST_FAIL,
      payload: error.message,
    });
  }
};
