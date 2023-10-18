'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import useGetUsers from '@/hooks/useGetUsers';
import {
  selectUsersLength,
  selectUsersByQuantity,
} from '@/redux/slices/usersSelectors';

import Item from './Item';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import styles from './index.module.sass';

const DataGrid = () => {
  const step = 20;
  const params = useSearchParams();
  const [usersAmount, setUsersAmount] = useState(20);
  const { users: allUsers, getUsers } = useGetUsers();
  const savedUsers = useSelector(selectUsersByQuantity(usersAmount));
  const savedUsersGeneralQuantity = useSelector(selectUsersLength);

  const mode = useMemo(() => 'all_users', []);

  const users = useMemo(
    () => (params.get('mode') === 'saved_users' ? savedUsers : allUsers),
    [params?.length, allUsers, savedUsers]
  );

  useEffect(() => {
    if (mode !== 'saved_users') getUsers(usersAmount);
  }, [usersAmount]);

  const handleButtonClick = useCallback(() => {
    setUsersAmount(usersAmount + step);
  }, [usersAmount]);

  return (
    <Box sx={{ flexGrow: 1, paddingBottom: '50px' }}>
      <Grid container spacing={2}>
        {users?.map((item, idx) => (
          <Grid key={idx} item xs={12} md={4}>
            <Item {...item} />
          </Grid>
        ))}
        {(mode === 'all_users' ||
          (mode === 'saved_users' &&
            savedUsersGeneralQuantity > usersAmount)) && (
          <Grid
            item
            xs={12}
            md={12}
            sx={{ textAlign: 'center', marginTop: '50px' }}
          >
            <Button
              variant="contained"
              onClick={handleButtonClick}
              sx={{ padding: '10px' }}
            >
              Load More
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default DataGrid;
