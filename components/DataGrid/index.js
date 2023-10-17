'use client';
import { useCallback, useEffect, useState } from 'react';
import useGetUsers from '@/hooks/useGetUsers';

import Item from './Item';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import styles from './index.module.sass';

const DataGrid = () => {
  const step = 20;
  const [usersAmount, setUsersAmount] = useState(20);
  const { users, getUsers } = useGetUsers();

  useEffect(() => {
    getUsers(usersAmount);
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
        <Grid item xs={12} md={12} sx={{ textAlign: 'center', marginTop: '50px' }}>
          <Button variant="contained" onClick={handleButtonClick} sx={{padding: '10px'}}>
            Load More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DataGrid;
