import { useState, useCallback } from 'react';

const useGetUsers = () => {
  const [users, setUsers] = useState();

  const getUsers = useCallback(async (quantity = '10') => {
    const response = await fetch(
      `https://randomuser.me/api/?results=${quantity}`
    );
    const result = await response.json();
    setUsers(result?.results);
  }, []);

  return { users, getUsers };
};

export default useGetUsers;
