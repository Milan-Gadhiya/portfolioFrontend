import { appDetailReducer, appListReducer } from "./reducers/appReducers";
import { thunk } from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

const initialState = {};
const reducer = combineReducers({
    appLists: appListReducer,
    appDetails: appDetailReducer,
});

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhance(applyMiddleware(thunk))
);

export default store;