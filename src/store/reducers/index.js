import { combineReducers } from "redux";
import changeReducer from "./change.reducer";

const reducers = combineReducers({
    changed: changeReducer
});

export default reducers;