'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';

import useGetUsers from '@/hooks/useGetUsers';
import useScreenSize from '@/hooks/useScreenSize';
import {
  selectUsersLength,
  selectUsersByQuantity,
} from '@/redux/slices/usersSelectors';

import Item from './Item';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';

const DataGrid = () => {
  const step = 20;
  const params = useSearchParams();
  const { width } = useScreenSize();
  const [usersAmount, setUsersAmount] = useState(20);
  const { users: allUsers, getUsers } = useGetUsers();
  const savedUsers = useSelector(selectUsersByQuantity(usersAmount));
  const savedUsersGeneralQuantity = useSelector(selectUsersLength);

  const mode = useMemo(() => params.get('mode'), [params]);

  const users = useMemo(() => {
    if (mode === 'saved_users') {
      return savedUsers;
    } else {
      return allUsers;
    }
  }, [mode, allUsers, savedUsers]);

  const [skeletonWidth, skeletonHeight] = useMemo(() => {
    if (width >= 360 && width < 768) return [320, 525]
    else if (width >= 768 && width < 1024) return [710, 505]
    else if (width >= 1024 && width < 1440) return [302, 525]
    else if (width >= 1440) return [356, 525]
  }, [width])

  useEffect(() => {
    if (mode !== 'saved_users') getUsers(usersAmount);
  }, [mode, usersAmount]);

  useEffect(() => {
    setUsersAmount(step);
  }, [mode]);

  const handleButtonClick = useCallback(() => {
    setUsersAmount(usersAmount + step);
  }, [usersAmount]);

  return (
    <Box sx={{ flexGrow: 1, paddingBottom: '50px' }}>
      <Grid container spacing={2}>
        {users
          ? users.map((item, idx) => (
              <Grid key={idx} item xs={12} md={4}>
                <Item mode={mode} {...item} />
              </Grid>
            ))
          : [...Array(21)].map((item, idx) => (
              <Grid key={idx} item xs={12} md={4}>
                <Skeleton variant='rectangular' width={skeletonWidth} height={skeletonHeight} />
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
            {users ? (
              <Button
                variant="contained"
                onClick={handleButtonClick}
                sx={{ padding: '10px' }}
              >
                Load More
              </Button>
            ) : (
              <Skeleton
                width={108}
                height={45}
                sx={{ display: 'block', margin: '0 auto' }}
              />
            )}
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default DataGrid;
