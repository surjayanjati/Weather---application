// Importing The CombineReducers ------------------------------>
import { combineReducers } from "redux";
// Importing The Reducers ------------------------------------->
import { gettingReducer } from "./gettingReducer";

// Creating The Root Reducer----------------------------------->
const rootReducer=combineReducers({gettingReducer});



// Exporting The Root Reducer
export default rootReducer;