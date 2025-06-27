import { combineReducers } from "redux";
import ApiReducer from "./ApiReducer";

const rootReducer = combineReducers({
    api : ApiReducer
})

export default rootReducer