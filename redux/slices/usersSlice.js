'use client';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUsers } = usersSlice.actions

export default usersSlice.reducer
