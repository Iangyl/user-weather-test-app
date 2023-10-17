'use client';
import { useEffect } from 'react';

import Item from './Item';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useGetUsers from '@/hooks/useGetUsers';

import styles from './index.module.sass';


const DataGrid = () => {
  const { users, getUsers } = useGetUsers();

  useEffect(() => {
    getUsers(20)
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {users?.map((item, idx) => (
          <Grid key={idx} item xs={12} md={4}>
            <Item {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DataGrid;
