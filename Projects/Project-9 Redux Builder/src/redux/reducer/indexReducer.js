import { combineReducers } from "redux";
import Crud from "./crudReducer";

const rootReducer = combineReducers({
    crud : Crud
});
export default rootReducer