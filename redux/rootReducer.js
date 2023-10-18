'use client';
import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/usersSlice';

const rootReducer = combineReducers({
  [userReducer.name]: userReducer
})

export default rootReducer
