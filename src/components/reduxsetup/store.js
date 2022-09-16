import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer/rootReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
