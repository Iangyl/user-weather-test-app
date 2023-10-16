import { useState, useCallback } from 'react';
import { isJsonString } from '@/app/utils/helpers';

const useGetUsers = () => {
  const [users, setUsers] = useState();

  const getUsers = useCallback(async (quantity = '10') => {
    const response = await fetch(
      `https://randomuser.me/api/?results=${quantity}`
    );
    const result = await response.json();
    if (isJsonString(result)) {
      setUsers(result);
    } else {
      setUsers(undefined);
    }
  }, []);

  return { users, getUsers };
};

export default useGetUsers;
