import { combineReducers } from "redux";
import heightReducer from "./reducers/heightReducer";
import dataReducer from "./reducers/dataReducer";
import loadingReducer from "./reducers/loadingReducer";
import cardReducer from "./reducers/cardReducer";
import paginationReducer from "./reducers/paginationReducer";
import searchReducer from "./reducers/searchReducer";
import filterReducer from "./reducers/filterReducer";
import alertReducer from "./reducers/alertReducer";

const combinedReducers = combineReducers({
  heightReducer,
  dataReducer,
  loadingReducer,
  cardReducer,
  paginationReducer,
  searchReducer,
  filterReducer,
  alertReducer,
});

export default combinedReducers;
