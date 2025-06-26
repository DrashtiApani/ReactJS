import { applyMiddleware, createStore } from "redux";
import rootReducer from "./crudReducer/MainReducer";
import { thunk } from "redux-thunk";


const store = createStore(rootReducer ,applyMiddleware(thunk));

export default store;
