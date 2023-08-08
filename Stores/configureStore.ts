import { configureStore } from "@reduxjs/toolkit";
import { StoreState } from "../Models/reduxModel";
import rootReducer from "./Reducers";
import thunk from "redux-thunk";

export default function ConfigureStore (initialState?: StoreState){ 
        return configureStore({
                reducer: rootReducer,
                preloadedState:initialState,
                middleware:[thunk]
        })
}