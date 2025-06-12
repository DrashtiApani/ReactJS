import { combineReducers } from "redux";
import counter from "./CounterReducer";

const rootReducer = combineReducers({
    cnt : counter
})

export default rootReducer