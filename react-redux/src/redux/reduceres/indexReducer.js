import { combineReducers } from "redux";
import Counter from "./counterReducer";

const rootReducer = combineReducers({
    cnt : Counter
})

export default rootReducer;