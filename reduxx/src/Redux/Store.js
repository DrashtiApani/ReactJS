import { createStore } from "redux";
import rootReducer from "./Reducer/MainReducer";

const store = createStore(rootReducer)

export default store