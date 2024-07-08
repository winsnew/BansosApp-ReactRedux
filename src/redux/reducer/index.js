import { combineReducers } from "redux";
import locationsReducer from "./locationReduce";
import pendudukReducer from "./pendudukReduce";


const rootReduce = combineReducers({
    locations: locationsReducer,
    penduduk: pendudukReducer
});

export default rootReduce