import { createStore } from "redux"
import rootreducer from "./reducers/main"

const store = createStore(
    rootreducer
);

export default store;