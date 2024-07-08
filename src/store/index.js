import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReduce from "../redux/reducer";

const store = createStore(rootReduce, applyMiddleware(thunk));

export default store