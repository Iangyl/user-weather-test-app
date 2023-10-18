import { createSelector } from 'reselect';
import {useSelector} from 'react-redux'

const selectUsers = (state) => state.reducer.users;

export const selectUsersByQuantity = (quantity) =>
  createSelector([selectUsers], (users) => {
    return users.slice(0, quantity);
  });

  export const selectUsersLength = createSelector([selectUsers], (users) => {
    return users.length;
  });


