import { combineReducers } from "redux";
import crudReducer from "./CrudReducer";

const rootReducer = combineReducers({ 
    crud : crudReducer
 })

 export default rootReducer