import { legacy_createStore as createStore } from "redux";
import transactionReducer from "./reducers";

const store = createStore(transactionReducer);
console.log(store.dispatch);

export default store;
