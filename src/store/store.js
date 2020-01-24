import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  data: dataReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// store.subscribe(() => console.log(store.getState()));
window.store = store;

export default store;
