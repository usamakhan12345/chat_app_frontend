import { combineReducers } from '@reduxjs/toolkit'
import AuthReducer from './reducers/authReducer.jsx'





export const rootReducer =  combineReducers({
 auth :  AuthReducer,
})