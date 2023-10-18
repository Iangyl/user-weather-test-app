'use client';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { email } = action.payload;

      const isDuplicate = state.users.some((user) => user.email === email);

      if (!isDuplicate) {
        state.users.push(action.payload);
      }
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
