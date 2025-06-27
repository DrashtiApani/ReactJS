import { combineReducers } from "redux";
import AxiosReducer from "./AxiosReducer";

const rootReducer = combineReducers({
    api : AxiosReducer
})

export default rootReducer