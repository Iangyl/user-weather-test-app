'use client';

import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    [userReducer.name]: userReducer
  }
})
