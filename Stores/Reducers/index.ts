import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
    user: UserReducer

})
export default rootReducer