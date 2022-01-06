import { createStore, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'
import {createAPI} from "../services/api";
import rootReducer from "./root-reducer"

const api = createAPI(
    () => {},
    (error) => {
      console.log(error)
    });

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    ))
  let persistor = persistStore(store)
  return { store, persistor }
}
