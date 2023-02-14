// Importng The CreateStore----------------------------------->
import { legacy_createStore } from "redux";
// Importing The rootReducer---------------------------------->
import rootReducer from "./reducers/rootReducer";



// Creating The Store----------------------------------------->
const store=legacy_createStore(rootReducer);

// Exporting The Store----------------------------------------->
export default store;