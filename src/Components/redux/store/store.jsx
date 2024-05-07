import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {rootReducer} from "../rootReducer.jsx"
import AuthReducer from '../reducers/authReducer.jsx'
// import thunkMiddleware from "redux-thunk";

// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)
// // let middlewares = [thunkMiddleware];


// const store = configureStore({
//   reducer: persistedReducer,
// //   middleware: middlewares,
// });
// let persistor = persistStore(store);


//   const configureStores = () => {
//   return { persistor, store };



// };


export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
})

// export default configureStores;