import { createStore } from "redux";
import rootReducer from "./reduceres/indexReducer";

const store = createStore(rootReducer);

export default store;